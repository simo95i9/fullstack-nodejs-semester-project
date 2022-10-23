import {Temporal} from "@js-temporal/polyfill"

export const article = {
    slug: "about",
    created: new Temporal.PlainDate(2022, 10, 11),
    updated: new Temporal.PlainDate(2022, 10, 11),
    author: "Simon Gredal",
    title: "About",
    content: [
        {
            type: "figure",
            src: "/images/code.webp",
            alt: "A display showing computer code",
            class: "26x9"
        },
        {
            type: "p",
            text:
                `This is where I will write about how this website is put together.`
        },
    ]
}