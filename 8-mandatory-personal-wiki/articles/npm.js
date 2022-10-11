import {Temporal} from "@js-temporal/polyfill"

export const article = {
    slug: "npm",
    created: new Temporal.PlainDate(2022, 10, 10),
    updated: new Temporal.PlainDate(2022, 10, 11),
    author: "Simon Gredal",
    title: "An Introduction to the Node.js Package Manager",
    content: [
        {type: "figure", src: "/images/packages2.jpeg", alt: "A person carrying hundreds of packages on a bicycle", text: "A person carrying hundreds of packages on a bicycle", class: "21x9"},
        {
            type: "p",
            text: `NPM is an essential tool for building Node.js software. 
            `},
        {type: "pre-code", class: "language-javascript", text: 'import express from "express"\nconst app = express()'}
    ]
}