<script>
    import {Temporal} from "@js-temporal/polyfill";

    let dates = [Temporal.Now.zonedDateTimeISO()]

    function updateDate() {
        const now = Temporal.Now.zonedDateTimeISO()
        dates = [...dates, now]
    }
</script>

{#each dates as date}
    <span>{date.toLocaleString()}</span><br>
{/each}
<a href="#" on:click={updateDate}>Update date</a>

<style>
</style>