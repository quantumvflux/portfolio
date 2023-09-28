import html from "./../assets/html.webp"
import css from "./../assets/css.webp"
import javascript from "./../assets/javascript.webp"
import typescript from "./../assets/typescript.webp"
import react from "./../assets/react.webp"
import redux from "./../assets/redux.webp"
import next from "./../assets/nextjs.webp"
import vue from "./../assets/vue.webp"
import nest from "./../assets/nest.webp"
import sqlite from "./../assets/sqlite.webp"
import mondongo from "./../assets/mongodb.webp"
import cosaHorrible from "./../assets/figma.webp"

import { StaticImageData } from "next/image"

export interface Technology {
    name: string
    image: StaticImageData;
}

export const technologies: Technology[] = [
    {
        name: "HTML",
        image: html
    },
    {
        name: "CSS",
        image: css
    },
    {
        name: "JavaScript",
        image: javascript
    },
    {
        name: "TypeScript",
        image: typescript
    },
    {
        name: "React",
        image: react
    },
    {
        name: "Redux",
        image: redux
    },
    {
        name: "Next.js",
        image: next
    },
    {
        name: "Vue",
        image: vue
    },
    {
        name: "NestJS",
        image: nest
    },
    {
        name: "SQLite",
        image: sqlite
    },
    {
        name: "MongoDB",
        image: mondongo
    },

    {
        name: "Figma",
        image: cosaHorrible
    }
]