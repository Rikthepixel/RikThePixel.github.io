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
        title: "HBO Software engineering student",

        company: "Hogeschool Fontys",
        companyLink: "https://fontys.nl/Studeren/Vind-een-passende-opleiding/HBO-ICT.htm",
        location: "Eindhoven",

        description: <>
            <h2 className="text-[1.05rem] font-bold text-center">Semester 1</h2>
            <p>
                After graduating from HAVO I chose to pursue a career in IT.
                In the first semester I learned about general IT; Infrastructure, Software, Design, Business and Technology.
            </p>
            <p>
                That semester I started programming for the first time.
                Because I liked it so much, I chose Software engineering as my specialty.
            </p>

            <h2 className="text-[1.05rem] font-bold text-center">Semester 2</h2>
            <p>
                In my second semester I made my first website, it was a portfolio website. It was built using PHP, and it used no libraries.
                I ended up running out of time. This project taught me that it is all right to use libraries, and that testing is crucial to the development life cycle.
            </p>

            <h2 className="text-[1.05rem] font-bold text-center">Semester 3</h2>
            <p>
                The third semester was harder then the second. It expanded upon the foundation that had been built by the second semester.
                Requirements for this semester were that I had to make use of a framework, an Object Relational Mapper (ORM) and proper tests.
            </p>
            <p>
                At the end of this semester, I learnt the importance of asking feedback and communicating with your client.
                Communication makes sure that the project stays on track and meets the client's requirements.
            </p>

            <h2 className="text-[1.05rem] font-bold text-center">Semester 4</h2>
            <p>
                The fourth semester offered us a choice of specialization.
                I chose Cyber Security, since it is a relevant topic, especially in web development.
            </p>
            <p>
                During this semester I lead a group of five student.
                We had to perform a security/penetration test for a company.
                This test turned out successful, we found a couple of flaws in their security.
                We promptly made a risk analysis and informed them of the vulnerabilities.
            </p>
        </>,

        startDate: { day: 1, month: 9, year: 2020 },
    },
    {
        title: "Software engineer",

        company: "TinyTronics",
        companyLink: "https://www.tinytronics.nl/shop/nl",
        location: "Eindhoven",

        description: <>
            <p>
                Since June I've started working as a Software engineer at TinyTronics.
                TinyTronics is a company that sells electronic components at an affordable price point.
            </p>
            <p>
                They brought me in to improve the workflow for their internal applications,
                so that work can be done more efficiently and the customer receives their orders sooner.
            </p>
        </>,

        startDate: { day: 8, month: 6, year: 2022 }
    }
];