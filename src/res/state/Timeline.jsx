/*
    title: string

    company: string
    companyLink: string?
    location: string?

    description: string? | html?

    periodName: string?
    startDate: { year: number, month: number, day: number }
    endDate: { year: number, month: number, day: number }?
*/

export default [
    {
        title: "ICT student",

        company: "Hogeschool Fontys",
        companyLink: "https://fontys.nl/Studeren/Vind-een-passende-opleiding/HBO-ICT.htm",
        location: "Eindhoven",

        description: <>
            <p>
                This was my first semester of college.
                In this semester we got taught about IT in general.
            </p>
            <p>
                It was in this semester that I first came in touch with programming.
                Turns out, I ended up liking it quite a lot! So much, in fact, that I chose to pursue software engineering.
            </p>
        </>,

        periodName: "Semester 1",
        startDate: { day: 1, month: 9, year: 2020 },
        endDate: { day: 28, month: 1, year: 2021 }
    },
    {
        title: "Software engineering student",

        company: "Hogeschool Fontys",
        companyLink: "https://fontys.nl/Studeren/Vind-een-passende-opleiding/HBO-ICT.htm",
        location: "Eindhoven",

        description: <>
            <p>
                In the second semester we started learning web development.
                I made (in hindsight) a bad portfolio website in raw PHP using no libraries.
            </p>
            <p>
                What I learned from that experience is that time management is important.
                I also learned that it is okay to use libraries, and that testing an application is a crucial part of development.
            </p>
        </>,

        periodName: "Semester 2",
        startDate: { day: 8, month: 2, year: 2021 },
        endDate: { day: 18, month: 6, year: 2021 }
    },
    {
        title: "Software engineering student",

        company: "Hogeschool Fontys",
        companyLink: "https://fontys.nl/Studeren/Vind-een-passende-opleiding/HBO-ICT.htm",
        location: "Eindhoven",

        description: <>
            <p>
                Semester three built upon the foundation that the second semester had built.
                I was thrown into the deep-end and had to make a distributed system using a framework.
            </p>
            <p>
                The demand-based teaching style of my college forced me to mostly research these requirements and subjects on my own.
                I could only ask for feedback and discuss progress with my teachers.
            </p>
            <p>
                In the end I learned how important it is to ask feedback to stakeholders.
                This will make sure a project stays on track.
            </p>
        </>,

        periodName: "Semester 3",
        startDate: { day: 1, month: 9, year: 2021 },
        endDate: { day: 24, month: 1, year: 2022 }
    },
    {
        title: "Cyber security student",

        company: "Hogeschool Fontys",
        companyLink: "https://fontys.nl/Studeren/Vind-een-passende-opleiding/HBO-ICT.htm",
        location: "Eindhoven",

        description: <>
            <p>
                Semester four is a specialization semester. 
                I chose Cyber Security, since it is a relevant topic, especially in web development.
            </p>
            <p>
                We had to form groups and ran a penetration test on a company.
                I was the leader of this group during and after the pentest was done.
            </p>
            <p>
                After the pentest we had to create a secure distributed computing platform.
                Since our group was a mix of software engineers, media designers and infrastructure students everyone got a chance to shine.
                I built and designed the backend together with a fellow software engineer.
            </p>
        </>,

        periodName: "Semester 4",
        startDate: { day: 7, month: 2, year: 2022 },
        endDate: { day: 24, month: 6, year: 2022 }
    },
];