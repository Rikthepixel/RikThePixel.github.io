import React from 'react';
import { generateSrcSet } from "utils/imageSets";
import PageHeader from "components/PageHeader";

import FrontImgClosed1x from "res/images/front/eyes closed/closed 1x.webp";
import FrontImgClosed2x from "res/images/front/eyes closed/closed 2x.webp";
import FrontImgClosed3x from "res/images/front/eyes closed/closed 3x.webp";
import FrontImgClosed4x from "res/images/front/eyes closed/closed 4x.webp";
import FrontImgClosed5x from "res/images/front/eyes closed/closed 5x.webp";

import FrontImgOpen1x from "res/images/front/eyes open/open 1x.webp";
import FrontImgOpen2x from "res/images/front/eyes open/open 2x.webp";
import FrontImgOpen3x from "res/images/front/eyes open/open 3x.webp";
import FrontImgOpen4x from "res/images/front/eyes open/open 4x.webp";
import FrontImgOpen5x from "res/images/front/eyes open/open 5x.webp";

import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { DescriptionProps } from '../components/FrontDescription';

//@ts-ignore
const Description = dynamic<DescriptionProps>(async () => (await import('../components/FrontDescription')).default, { ssr: false });

const [FrontOpenImgSetString, displayFrontOpenImg] = generateSrcSet([
    FrontImgOpen1x,
    FrontImgOpen2x,
    FrontImgOpen3x,
    FrontImgOpen4x,
    FrontImgOpen5x,
]);

const [FrontClosedImgSetString, displayFrontClosedImg] = generateSrcSet([
    FrontImgClosed1x,
    FrontImgClosed2x,
    FrontImgClosed3x,
    FrontImgClosed4x,
    FrontImgClosed5x,
]);

const Front = () => {


    return (
        <>
            <Head>
                <title>Rik den Breejen | Portfolio</title>
            </Head>
            <PageHeader className="mt-auto">
                <div>
                    <p>&lt; I'm Rik! /&gt;</p>
                </div>
            </PageHeader>
            <section
                aria-label="About me"
                className="w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:justify-center children:items-center pb-32 sm:pb-20 sm:flex-nowrap md:gap-8"
            >
                <div className="flex relative w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] aspect-square">
                    <img
                        loading="eager"
                        aria-label="Image"
                        width="500"
                        height="500"
                        className="absolute w-full h-full aspect-square object-cover rounded-full z-10 transition-opacity duration-75 hover:opacity-0"
                        src={displayFrontOpenImg.src}
                        srcSet={FrontOpenImgSetString}
                        alt="A guy with brown hair, brown eyes and white skin"
                    />
                    <img
                        aria-hidden="true"
                        loading="eager"
                        aria-label="Image"
                        width="500"
                        height="500"
                        className="absolute w-full h-full aspect-square object-cover rounded-full"
                        src={displayFrontClosedImg.src}
                        srcSet={FrontClosedImgSetString}
                        alt="A guy with brown hair, brown eyes and white skin"
                    />
                </div>
                <Description
                    shortDescription={<>
                        <p aria-label="Who I am">Hello, my name is Rik den Breejen.</p>
                        <p aria-label="What I do">I'm a Software engineering student at Fontys.</p>
                    </>}

                    longDescription={<>
                        <p aria-label="Who I am">
                            Hello, my name is Rik den Breejen.<br />
                            I'm a Dutch Software engineering student at Fontys.<br />
                            I have a passion for coding and often spend a lot of my free time programming.
                        </p>
                        <p aria-label="What I am currently learning">
                            Currently learning: <br />
                            <a href="https://www.python.org/" target="_blank">Python 🐍</a> and <a href="https://v2.vuejs.org/" target="_blank">Vue 2 👀</a>
                        </p>
                    </>}
                />
            </section>
        </>
    );
};

export default Front;