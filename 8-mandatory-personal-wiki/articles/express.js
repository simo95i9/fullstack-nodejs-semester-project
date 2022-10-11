import {Temporal} from "@js-temporal/polyfill"

export const article = {
    slug: "express",
    created: new Temporal.PlainDate(2022, 10, 11),
    updated: new Temporal.PlainDate(2022, 10, 11),
    author: "Simon Gredal",
    title: "Don't Stress, This Is How To Use Express.js",
    content: [
        {type: "figure", src: "/images/code.webp", alt: "A display showing computer code", class: "26x9"},
        {
            type: "p",
            text: `Express is amazing :) 
            `},
        {type: "pre-code", class: "language-javscript", text: 'import express from "express"\nconst app = express()'}
    ]
}