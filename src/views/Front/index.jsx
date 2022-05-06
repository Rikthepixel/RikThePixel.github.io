import React, { useEffect } from 'react';
import AboutMePhoto from "res/images/FrontImage.webp";
import PageHeader from "components/PageHeader";
import "./Front.scss";

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Portfolio";
  }, []);

  return (
    <>
      <PageHeader className="pb-0 mt-auto sm:mt-0">
        <div>
          <p className="text-[5vmin]">Hello!</p>
          <p>I'm Rik!</p>
        </div>
        <div className="hero-action move-down font-extrabold text-[10vmin] hidden sm:block" aria-label="Go down">↓</div>
      </PageHeader>
      <section
        aria-label="About me"
        className="w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:w-full children:flex children:justify-center children:items-center pb-32 sm:pb-24 sm:flex-nowrap sm:children:w-auto md:gap-8"
      >
        <div>
          <img
            aria-label="Image"
            className="w-full h-fit aspect-square object-cover rounded-full max-w-[10rem] sm:max-w-[15rem]"
            src={AboutMePhoto}
            alt="A guy with brown hair, brown eyes and white skin holding a french bulldog with white fur and black dots"
          />
        </div>
        <div
          aria-label="Description"
          className="hero-short"
        >
          <p aria-label="Who I am">Hello, my name is Rik den Breejen.</p>
          <p aria-label="What I do">I'm a Software engineering student at Fontys.</p>
        </div>
        <div
          aria-label="Description"
          className="hero-long"
        >
          <p aria-label="Who I am">
            Hello, my name is Rik den Breejen. I'm a Dutch Software engineering student at Fontys.<br />
            I have a passion for coding! I often spend a lot of my free time programming.
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