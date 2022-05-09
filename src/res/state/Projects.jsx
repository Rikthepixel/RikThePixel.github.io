import React from "react";
import MyWebsite from "res/images/MyWebsite.webp";
import MennoWebsite from "res/images/MennoWebsite.webp";
import PinnoteLogo from "res/images/PinnoteLogo.webp";

/*
    title: string
    text: string? | html?

    icon: imagePath?

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
        title: "My portfolio website",
        icon: MyWebsite,
        text: <>
            <p>After making a portfolio website for Menno I realized that I needed one too. This was because in my upcoming semester I had to do an internship.</p>
            <p>
                I made this website using <a href="https://vitejs.dev/" target="_blank">Vite</a>, <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.
            </p>
            <p>
                Another notable technology I used is <a href="https://github.com/stereobooster/react-snap#readme" target="_blank">React-snap</a>. This package pre-renders the SPA (single page application) into an HTML file.
                This optimizes the website for search engines that do not run Javascript like Bing.
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
        icon: MennoWebsite,
        text: <>
            <p>I made this portfolio website for <a href="https://www.linkedin.com/in/menno-bil-055100201/" target="_blank">Menno Bil</a>. I made this website for his birthday.</p>
            <p>He told me a that he wanted to redo his website, though he did not have the required knowledge to make it.</p>
            <p>That is when I had the ✨<strong>bright</strong>✨ idea to make him a new portfolio website using <a href="https://vitejs.dev/" target="_blank">Vite</a>, <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>
        </>,

        startDate: { day: 1, month: 4, year: 2022 },
        endDate: { day: 14, month: 4, year: 2022 },

        links: [
            { name: "Go to website", link: "https://m-e-n-n-o.github.io/" }
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
        icon: PinnoteLogo,
        text: <>
            <p>In the third semester of my college I made Pinnnote.</p>
            <p>
                Pinnote was a web-based note making app, which implemented workspaces similarly to Trello.
                You could add attachments to notes, customize your note-boards and share your note-boards with other people.
            </p>
            <p>
                My skill developed a lot during the making of Pinnote, which led to the code-base becoming messy.
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