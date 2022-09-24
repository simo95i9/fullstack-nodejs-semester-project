import {Temporal} from "@js-temporal/polyfill";
const api = "http://localhost:3000/api/v1"
let countdowns = []
let data_needs_update = true

document.addEventListener("DOMContentLoaded", () => {
    updateDateField()
    updateTimezoneField()

    document.querySelector("#year-input").addEventListener("change", updateDateField)
    document.querySelector("#month-select").addEventListener("change", updateDateField)
    document.querySelector("#submit-button").addEventListener("click", submitCountdownForm)
    setTimeout(fetchCountdowns, 100)
    setTimeout(updateCountdownList, 50)
})

async function submitCountdownForm() {
    const title = document.querySelector("#title-input").value
    const description = document.querySelector("#description-input").value
    const createdBy = document.querySelector("#name-input").value
    const createdDate = Temporal.Now.zonedDateTimeISO()
    const targetDate = (() => {
        const year = document.querySelector("#year-input").value
        const month = document.querySelector("#month-select").value
        const day = document.querySelector("#date-select").value
        const [hour, minute] = document.querySelector("#time-input").value.split(":")
        const timeZone = document.querySelector("#timezone-select").value

        return Temporal.ZonedDateTime.from({year, month, day, hour, minute, timeZone})
    })()

    const body = JSON.stringify({title, description, createdBy, createdDate, targetDate})
    const method = "post"
    const headers = new Headers()
    headers.set("Content-Type", "application/json")

    fetch(
        `${api}/countdowns`,
        {method, headers, body}
    ).then(() => { data_needs_update = true })
}


function updateDateField() {
    const date_select = document.querySelector("#date-select")

    const year = document.querySelector("#year-input").value
    const month = document.querySelector("#month-select").value
    const partial_date = Temporal.PlainYearMonth.from({year, month})

    date_select.innerHTML = ""
    for (let i = 1; i <= partial_date.daysInMonth; i++) {
        date_select.innerHTML += `<option value="${i}">${i}</option>`
    }
}

function updateTimezoneField() {
    const timezones = Intl.supportedValuesOf("timeZone")
        .reduce((prev, curr) => {
            const timezones = {...prev}

            if (!curr.includes("/")) {
                timezones[curr] = curr
                return timezones
            }

            const [region, place] = curr.split("/")
            if (timezones[region] === undefined)
                timezones[region] = {}

            timezones[region][place] = curr
            return timezones
        }, {})

    const options = Object.entries(timezones).map(([region, place]) => {
        if (typeof place === "string") {
            return `<option value="${place}">${place}</option>`
        }

        const places = Object.entries(place).map(([place, timezone]) => {
            return `<option value="${timezone}">${place}</option>`
        })

        return `<optgroup label="${region}">${places.join("")}</optgroup>`
    }).join("")


    document.querySelector("#timezone-select").innerHTML = options
}

function updateCountdownList() {
    const countdownList = document.querySelector("#countdown-list")

    countdownList.innerHTML = ""
    countdowns.forEach(countdown => {
        const countdownElement = createCountdown(countdown)
        countdownList.innerHTML += countdownElement
    })
    setTimeout(updateCountdownList, 50)
}

async function fetchCountdowns() {
    if (!data_needs_update) {
        setTimeout(fetchCountdowns, 100)
        return
    }

    const response = await fetch(
        `${api}/countdowns`,
        {method: "get"}
    )
    const json = await response.json()
    countdowns = json.map( countdown => {
        return {
            title: countdown.title,
            description: countdown.description,
            createdBy: countdown.createdBy,
            createdDate: Temporal.ZonedDateTime.from(countdown.createdDate),
            targetDate: Temporal.ZonedDateTime.from(countdown.targetDate)
        }
    })

    data_needs_update = false
    setTimeout(fetchCountdowns, 100)
}

function createCountdown(countdown) {
    const userDateTimeOptions = Intl.DateTimeFormat().resolvedOptions()
    const durationFormatter = new Intl.RelativeTimeFormat("da", {numeric: "auto", style: "long"})

    const now = Temporal.Now.zonedDateTimeISO(userDateTimeOptions.timeZone)

    const created = Temporal.ZonedDateTime.from(countdown.createdDate)
    const sinceCreated = now.until(created)

    const target = Temporal.ZonedDateTime.from(countdown.targetDate)
    const untilTarget = now.until(target)

    return `<div class="flex flex-col flex-shrink flex-grow p-3 md:basis-full lg:basis-6/12 xl:basis-4/12 gap-1 items-center rounded-3xl bg-blue-500 text-white">
                <span>${countdown.title} ${durationFormatter.format(Math.ceil(untilTarget.total("seconds")), "seconds")}</span>
                <span>${countdown.description}</span>
                <span>Oprettet af ${countdown.createdBy}, ${durationFormatter.format(Math.ceil(sinceCreated.total("seconds")), "seconds")}.</span>
            </div>`
}

