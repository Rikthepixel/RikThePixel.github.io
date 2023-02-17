import Head from "next/head";

import InlineLink from "components/navigation/InlineLink";

const About = ({ }) => {
    return (
        <>
            <Head>
                <title>Rik den Breejen | About</title>
            </Head>
            <div className="w-full h-full max-w-7xl">
                <h1 id="page-header" className="w-0 h-0 text-[0px]">About Me</h1>
                <section className="text-center" aria-labelledby="who-am-i">
                    <h2 id="who-am-i" className="text-5xl font-medium">Who am I?</h2>
                    <div className="flex flex-col gap-4 mt-6">
                        <p className="font-medium">
                            I am Rik den Breejen, a Software engineer from the Netherlands.
                            My specialization is prominently in web-development, ranging from front- to back-end.
                        </p>
                        <p className="font-medium">
                            Currently I attend <InlineLink href="https://fontys.edu/" rel="noreferrer" external>Fontys University of Applied Sciences</InlineLink>, majoring in Software engineering.
                            Ever since I started attending college I have gained a passion for coding.
                        </p>
                        <p className="font-medium">
                            My love for coding drives me to spend a lot of my free time programming on personal projects.
                            I often find myself experimenting with and geeking out over new technologies.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;