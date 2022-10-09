import React, { ReactNode, useEffect } from 'react';
import { generateSrcSet } from "utils/imageSets";
import PageHeader from "components/PageHeader";
import useMediaQuery from "hooks/useMediaQuery";

import FrontImg1x from "res/images/front/FrontImage-1x.webp";
import FrontImg2x from "res/images/front/FrontImage-2x.webp";
import FrontImg3x from "res/images/front/FrontImage-3x.webp";
import FrontImg4x from "res/images/front/FrontImage-4x.webp";
import FrontImg5x from "res/images/front/FrontImage-5x.webp";

const generateAria = (hidden: boolean) => ({
    "aria-hidden": hidden,
    "aria-label": hidden ? "Hidden description" : "Description"
});

interface DescriptionProps {
    shortDescription: ReactNode;
    longDescription: ReactNode;
}

const Description = ({ shortDescription, longDescription }: DescriptionProps) => {
    const isLarger = useMediaQuery("(min-width: 640px)");

    return (
        <>
            <style jsx>{`
                .front_description {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }

                .front_description[data-long="true"] {
                    display: none;
                }   
                
                @media (min-width: 640px) {
                    .front_description[data-short="true"] {
                        display: none
                    }

                    .front_description[data-short="true"] {
                        display: flex;
                    }
                }
            `}</style>
            <div
                {...generateAria(window === undefined ?? isLarger)}
                className="front_description description"
                data-short
            >
                {shortDescription}
            </div>
            <div
                {...generateAria(window !== undefined ?? !isLarger)}
                className="front_description description"
                data-long
            >
                {longDescription}
            </div>
        </>
    );
};

const [FrontImgSetString, displayFrontImg] = generateSrcSet([
    FrontImg1x,
    FrontImg2x,
    FrontImg3x,
    FrontImg4x,
    FrontImg5x,
]);

const Front = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Portfolio";
    }, []);

    return (
        <>
            <PageHeader className="mt-auto">
                <div>
                    <p>&lt; I'm Rik! /&gt;</p>
                </div>
            </PageHeader>
            <section
                aria-label="About me"
                className="w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:w-full children:justify-center children:items-center pb-32 sm:pb-20 sm:flex-nowrap sm:children:w-auto md:gap-8"
            >
                <div className="flex">
                    <img
                        loading="eager"
                        aria-label="Image"
                        width="500"
                        height="500"
                        className="w-full h-fit aspect-square object-cover rounded-full max-w-[10rem] sm:max-w-[15rem]"
                        src={displayFrontImg.src}
                        srcSet={FrontImgSetString}
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
                            <a href="https://vitejs.dev/" target="_blank">ViteJS ⚡</a> and <a href="https://mui.com/" target="_blank">Material UI (MUI)</a>
                        </p>
                    </>}
                />
            </section>
        </>
    );
};

export default Front;