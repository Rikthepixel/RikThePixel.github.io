import React, { useEffect } from 'react';
import { generateSrcSet } from "utils/imageSets";
import PageHeader from "components/PageHeader";
import FrontImg1x from "images/front/FrontImage-1x.webp";
import FrontImg2x from "images/front/FrontImage-2x.webp";
import FrontImg3x from "images/front/FrontImage-3x.webp";
import FrontImg4x from "images/front/FrontImage-4x.webp";
import FrontImg5x from "images/front/FrontImage-5x.webp";
import "./Front.scss";


const [FrontImgSetString, displayFrontImg] = generateSrcSet([
  { src: FrontImg1x, width: 500, height: 500 },
  { src: FrontImg2x, width: 1000, height: 1000 },
  { src: FrontImg3x, width: 1500, height: 1500 },
  { src: FrontImg4x, width: 2000, height: 2000 },
  { src: FrontImg5x, width: 2316, height: 2316 },
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
        className="w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:w-full children:flex children:justify-center children:items-center pb-32 sm:pb-20 sm:flex-nowrap sm:children:w-auto md:gap-8"
      >
        <div>
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
        <div
          aria-label="Description"
          className="hero-short description"
        >
          <p aria-label="Who I am">Hello, my name is Rik den Breejen.</p>
          <p aria-label="What I do">I'm a Software engineering student at Fontys.</p>
        </div>
        <div
          aria-label="Description"
          className="hero-long description"
        >
          <p aria-label="Who I am">
            Hello, my name is Rik den Breejen.<br />
            I'm a Dutch Software engineering student at Fontys.<br />
            I have a passion for coding and often spend a lot of my free time programming.
          </p>
          <p aria-label="What I am currently learning">
            Currently learning: <br />
            <a href="https://vitejs.dev/" target="_blank">ViteJS ⚡</a> and <a href="https://love2d.org/" target="_blank">Love2D</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Front;