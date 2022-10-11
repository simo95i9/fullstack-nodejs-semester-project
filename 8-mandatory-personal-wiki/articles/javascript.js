import {Temporal} from "@js-temporal/polyfill"

export const article = {
    slug: "javscript",
    created: new Temporal.PlainDate(2022, 10, 11),
    updated: new Temporal.PlainDate(2022, 10, 11),
    author: "Simon Gredal",
    title: "JavaScript: The Sort of Alright Parts",
    content: [
        {type: "figure", src: "/images/cthulhu.jpg", alt: "Cthulhu rising out of the water near a shore", text: "The only way to keep your sanity is not to think about it", class: "26x9"},
        {
            type: "p",
            text: `Express is amazing :) 
            `},
        {type: "pre-code", class: "language-javascript", text: 'import express from "express"\nconst app = express()'}
    ]
}