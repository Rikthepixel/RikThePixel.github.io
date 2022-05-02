import MyWebsite from "res/images/MyWebsite.webp";
import MennoWebsite from "res/images/MennoWebsite.webp";

/*
    title: string
    text: string? | html?

    icon: imagePath?

    link: string
    linkLabel: string

    startDate: { year: number, month: number, day: number }
    endDate: { year: number, month: number, day: number }?
    datePriority: number (if the endDate is not set, this will decide which project holds priority)?

    technologies: [
        { name: string, link: string? }
    ]
*/

export default [
    {
        title: "My portfolio website",
        icon: MyWebsite,
        text: <>
            <p>After making a portfolio website for my friend I realized that I needed one too! This was because in my upcoming semester I had to do an internship.</p>
            <p>I made this website using <a href="https://vitejs.dev/" target="_blank">Vite</a>, <a href="https://preactjs.com/" target="_blank">Preact</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>
        </>,

        link: "#/",
        linkLabel: "You are already there!",

        startDate: { day: 24, month: 4, year: 2022 },
        datePriority: -1,

        technologies: [
            { name: "ViteJS", link: "https://vitejs.dev/" },
            { name: "Preact", link: "https://preactjs.com/" },
            { name: "React-select", link: "https://react-select.com/" },
            { name: "Tailwind", link: "https://tailwindcss.com/" },
            { name: "SCSS", link: "https://sass-lang.com/" },
        ]
    },
    {
        title: "Portfolio website Menno Bil",
        icon: MennoWebsite,
        text: <>
            <p>I made this portfolio website for <a href="https://www.linkedin.com/in/menno-bil-055100201/" target="_blank">Menno Bil</a>. He is a good friend of mine and his birthday was coming up.</p>
            <p>He told me a while before that he wanted to redo his website, but since he is more interested in game development he didn't really know how.</p>
            <p>That is when I had the ✨<strong>bright</strong>✨ idea to make him a new portfolio website using <a href="https://vitejs.dev/" target="_blank">Vite</a>, <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>
        </>,

        link: "https://m-e-n-n-o.github.io/",
        linkLabel: "Go to website",

        startDate: { day: 1, month: 4, year: 2022 },
        endDate: { day: 14, month: 4, year: 2022 },

        technologies: [
            { name: "ViteJS", link: "https://vitejs.dev/" },
            { name: "React", link: "https://reactjs.org/" },
            { name: "React-select", link: "https://react-select.com/" },
            { name: "Tailwind", link: "https://tailwindcss.com/" },
            { name: "SCSS", link: "https://sass-lang.com/" },
            { name: "P5", link: "https://p5js.org/" }
        ]
    }
];