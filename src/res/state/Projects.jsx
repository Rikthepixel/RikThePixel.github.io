import React from "react";
import PortfolioWebsite1x from "images/projects/PortfolioWebsite-1x.webp";
import PortfolioWebsite2x from "images/projects/PortfolioWebsite-2x.webp";
import PortfolioWebsite3x from "images/projects/PortfolioWebsite-3x.webp";
import PortfolioWebsite4x from "images/projects/PortfolioWebsite-4x.webp";
import MennoWebsite1x from "images/projects/MennoWebsite-1x.webp";
import MennoWebsite2x from "images/projects/MennoWebsite-2x.webp";
import MennoWebsite3x from "images/projects/MennoWebsite-3x.webp";
import MennoWebsite4x from "images/projects/MennoWebsite-4x.webp";
import PinnoteLogo from "images/projects/PinnoteLogo.webp";
import SitemapMaker1x from "images/projects/Sitemap-1x.webp";
import SitemapMaker2x from "images/projects/Sitemap-2x.webp";
import SitemapMaker3x from "images/projects/Sitemap-3x.webp";
import SitemapMaker4x from "images/projects/Sitemap-4x.webp";

/*

    title: string
    text: string? | html?

    icon: { src: imagePath, width: number, height: number }? | { src: imagePath, width: number, height: number }[]?
    iconAlt: string?

    startDate: { year: number, month: number, day: number }
    endDate: { year: number, month: number, day: number }?
    datePriority: number (if the endDate is not set, this will decide which project holds priority)?

    links: [
        { name: string, link: string }
    ]

    technologies: [
        { name: string, link: string? }
    ]
*/

export default [
    {
        title: "React Router sitemap maker package",

        icon: [
            { src: SitemapMaker1x, width: 340, height: 255 },
            { src: SitemapMaker2x, width: 534, height: 400 },
            { src: SitemapMaker3x, width: 800, height: 600 },
            { src: SitemapMaker4x, width: 1067, height: 800 },
        ],
        iconAlt: "A sitemap generated with my package",

        text: <>
            <p>
                When creating my portfolio website, I used a package that created a <a href="https://www.sitemaps.org/" target="_blank">sitemap</a> automatically.
                This package was made for <a href="https://reactrouterdotcom.fly.dev/" target="_blank">React Router</a> v4 while I was using React Router v6.
            </p>
            <p>
                I decided to learn a how to make a npm-package and publish it online.
                My react-router-sitemap-maker package is fully compatible with React Router v6 and is built with <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>.
            </p>
            <p>
                I published my package with the intent of having it be FOSS (Free and Open-Source Software) that anyone could build on top of.
            </p>
        </>,

        startDate: { day: 22, month: 5, year: 2022 },
        endDate: { day: 24, month: 5, year: 2022 },

        links: [
            { name: "View on Npm", link: "https://www.npmjs.com/package/react-router-sitemap-maker" },
            { name: "See the source", link: "https://github.com/Rikthepixel/react-router-sitemap-maker" }
        ],
        technologies: [
            { name: "JavaScript" },
            { name: "npm", link: "https://www.npmjs.com/" },
            { name: "Typescript", link: "https://www.typescriptlang.org/" },
            { name: "React", link: "https://reactjs.org/" },
            { name: "React-router", link: "https://reactrouterdotcom.fly.dev/" },
            { name: "Mocha", link: "https://mochajs.org/" },
            { name: "Sitemap", link: "https://www.sitemaps.org" }
        ]
    },
    {
        title: "Personal portfolio website",

        icon: [
            { src: PortfolioWebsite1x, width: 500, height: 375 },
            { src: PortfolioWebsite2x, width: 1000, height: 750 },
            { src: PortfolioWebsite3x, width: 1500, height: 1125 },
            { src: PortfolioWebsite4x, width: 2000, height: 1500 }
        ],
        iconAlt: "A picture of the portfolio website you are now on",

        text: <>
            <p>After making a portfolio website for Menno I realized that I needed one too. This was because in my upcoming semester I had to do an internship.</p>
            <p>
                I made this website using <a href="https://vitejs.dev/" target="_blank">Vite</a>, <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.
            </p>
            <p>
                Another notable technology I used is <a href="https://github.com/stereobooster/react-snap#readme" target="_blank">React-snap</a>. This package pre-renders the SPA (single page application) into an HTML file.
                This optimizes the website for search engines that do not run JavaScript like Bing.
            </p>
        </>,

        startDate: { day: 24, month: 4, year: 2022 },
        datePriority: 0,

        links: [
            { name: "You are already on the website!", link: "#/" },
            { name: "View the source code", link: "https://github.com/Rikthepixel/RikThePixel.github.io" }
        ],

        technologies: [
            { name: "JavaScript" },
            { name: "ViteJS", link: "https://vitejs.dev/" },
            { name: "React", link: "https://reactjs.org/" },
            { name: "React-router", link: "https://reactrouterdotcom.fly.dev/" },
            { name: "React-snap", link: "https://github.com/stereobooster/react-snap#readme" },
            { name: "Tailwind", link: "https://tailwindcss.com/" },
            { name: "SCSS", link: "https://sass-lang.com/" },
        ]
    },
    {
        title: "Portfolio website Menno Bil",

        icon: [
            { src: MennoWebsite1x, width: 500, height: 375 },
            { src: MennoWebsite2x, width: 1000, height: 750 },
            { src: MennoWebsite3x, width: 1500, height: 1125 },
            { src: MennoWebsite4x, width: 2000, height: 1500 }
        ],
        iconAlt: "A picture of Menno's portfolio website",

        text: <>
            <p>I made this portfolio website for <a href="https://www.linkedin.com/in/menno-bil-055100201/" target="_blank">Menno Bil</a>. I made this website for his birthday.</p>
            <p>He told me a that he wanted to redo his website, though he did not have the required knowledge to make it.</p>
            <p>That is when I had the ✨<strong>bright</strong>✨ idea to make him a new portfolio website using <a href="https://vitejs.dev/" target="_blank">Vite</a>, <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>
        </>,

        startDate: { day: 1, month: 4, year: 2022 },
        endDate: { day: 14, month: 4, year: 2022 },

        links: [
            { name: "Go to the website", link: "https://m-e-n-n-o.github.io/" }
        ],

        technologies: [
            { name: "JavaScript" },
            { name: "ViteJS", link: "https://vitejs.dev/" },
            { name: "React", link: "https://reactjs.org/" },
            { name: "Tailwind", link: "https://tailwindcss.com/" },
            { name: "SCSS", link: "https://sass-lang.com/" },
            { name: "P5", link: "https://p5js.org/" }
        ]
    },
    {
        title: "Pinnote",

        icon: { src: PinnoteLogo, width: 400, height: 152 },
        iconAlt: "The Pinnote Logo",

        text: <>
            <p>In the third semester of my college, I made Pinnote.</p>
            <p>
                Pinnote was a web-based note making app, which implemented workspaces similarly to Trello.
                You could add attachments to notes, customize your note-boards and share your note-boards, with other people.
            </p>
            <p>
                My skill developed a lot during the making of Pinnote, which led to the codebase becoming messy.
                Reflecting on the project, I would say that I could have made a lot of things better, like the implementation of SignalR or the way the authentication was handled.
                Though over-all It was a very educational experience!
            </p>
        </>,

        startDate: { day: 4, month: 9, year: 2021 },
        endDate: { day: 18, month: 1, year: 2022 },

        links: [
            { name: "View source", link: "https://github.com/Rikthepixel/Pinnote-frontend" }
        ],

        technologies: [
            { name: "JavaScript" },
            { name: "React", link: "https://reactjs.org/" },
            { name: "Create-React-App", link: "https://create-react-app.dev/" },
            { name: "React-Router", link: "https://reactrouterdotcom.fly.dev/" },
            { name: "Redux", link: "https://redux.js.org/" },
            { name: "Bootstrap", link: "https://getbootstrap.com/" },
            { name: "SCSS", link: "https://sass-lang.com/" },
            { name: "Firebase", link: "https://firebase.google.com/" },

            { name: "C#" },
            { name: "ASP.net", link: "https://dotnet.microsoft.com/en-us/apps/aspnet" },
            { name: "SignalR", link: "https://dotnet.microsoft.com/en-us/apps/aspnet/signalr" },
            { name: "Entity Framework", link: "https://docs.microsoft.com/en-us/ef/" },

            { name: "MySql", link: "https://www.mysql.com/" }
        ]
    }
];