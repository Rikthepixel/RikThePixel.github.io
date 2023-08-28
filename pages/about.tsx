import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";

import { PageProps } from "typings/page";

import InlineLink from "components/navigation/InlineLink";
import LinkButton from "components/controls/LinkButton";
import Experience from "components/pages/about/Experience";
import ExternalLink from "components/pages/about/ExternalLink";

import RikSquarePicture from "res/images/graphics/rik-square.webp";

import experiences from "res/state/experiences";
import externalLinks from "res/state/external-links";
import { NextSeo } from "next-seo";

const portraitPictureAnimation = {
  initial: {
    translateX: "-5%",
  },
  animate: {
    translateX: "0%",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    translateX: "5%",
  },
} as const;

const experienceContainerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const experienceAnimation = {
  hidden: {
    translateX: "-5%",
  },
  show: {
    translateX: "0%",
  },
} as const;

const About = ({ initialLoad }: PageProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <NextSeo
        title="Rik den Breejen | About"
        openGraph={{
          title: "Rik den Breejen | About",
        }}
      />
      <h1 id="page-header" className="absolute text-[0px]">
        About Me
      </h1>
      <div className="w-full h-full overflow-auto">
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-16 py-16 md:gap-24 md:py-24">
          <section
            className="grid place-items-center w-full text-center gap-4 p-4 md:grid-flow-col md:grid-rows-1"
            aria-labelledby="who-am-i"
          >
            <motion.img
              className="w-44 aspect-square rounded-lg md:w-80"
              src={RikSquarePicture.src}
              width={RikSquarePicture.width}
              height={RikSquarePicture.height}
              alt="Me, Rik"
              initial={initialLoad ? "" : "initial"}
              animate="animate"
              exit="exit"
              variants={reduceMotion ? undefined : portraitPictureAnimation}
            />
            <div className="flex flex-col gap-4">
              <h2 id="who-am-i" className="text-4xl font-medium md:text-5xl">
                Who am I?
              </h2>
              <p className="font-medium">
                I am Rik den Breejen, a Software engineer from the Netherlands.
                My specialization is predominantly in web-development, ranging
                from front- to back-end.
              </p>
              <p>
                Currently I attend{" "}
                <InlineLink
                  href="https://fontys.edu/"
                  rel="noreferrer"
                  external
                >
                  Fontys University of Applied Sciences
                </InlineLink>
                , majoring in Software engineering. Ever since I started
                attending college I have gained a passion for coding.
              </p>
              <p>
                My love for coding drives me to spend a lot of my free time
                programming on personal projects. I often find myself
                experimenting with and geeking out over new technologies.
              </p>
            </div>
          </section>
          <section className="p-4" aria-labelledby="experience">
            <h2
              id="experience"
              className="text-4xl font-medium text-center md:text-5xl"
            >
              Experience
            </h2>
            <motion.div
              className="flex flex-col gap-4 mt-4"
              initial="hidden"
              animate="show"
              variants={experienceContainerAnimation}
            >
              {experiences.map((experience, i, arr) => (
                <motion.div
                  key={i}
                  variants={
                    reduceMotion || initialLoad ? {} : experienceAnimation
                  }
                >
                  <Experience
                    showDivider={i < arr.length - 1}
                    {...experience}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
          <section
            className="flex flex-col items-center gap-4 p-4"
            aria-labelledby="external-links"
          >
            <h2
              id="external-links"
              className="text-4xl font-medium text-center md:text-5xl"
            >
              External Links
            </h2>
            <div className="flex flex-col gap-4">
              {externalLinks.map((externalLink, i) => (
                <ExternalLink key={i} {...externalLink} />
              ))}
            </div>
          </section>
          <section
            className="flex flex-col items-center text-center gap-4 p-4"
            aria-labelledby="projects"
          >
            <h2 id="projects" className="absolute text-[0px]">
              Projects
            </h2>
            <div>
              Actions speak louder then words! Have a look at my projects next
            </div>
            <LinkButton href="/projects" className="block">
              Go to my Projects
            </LinkButton>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
