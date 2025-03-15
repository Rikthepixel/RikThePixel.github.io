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
import Header from "components/Header";

const PORTRAIT_PICTURE_ANIMATION = {
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

const EXPERIENCE_CONTAINER_ANIMATION = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const EXPERIENCE_ANIMATION = {
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
              variants={reduceMotion ? undefined : PORTRAIT_PICTURE_ANIMATION}
            />
            <div className="flex flex-col gap-4">
              <Header.H2 id="who-am-i">Who am I?</Header.H2>
              <p className="font-medium">
                I am Rik den Breejen, a Software engineer from the Netherlands.
                My specialization is predominantly in web-development, ranging
                from front- to back-end.
              </p>
              <p>
                {"I work at "}
                <InlineLink
                  href="https://www.tinytronics.nl/"
                  rel="noreferrer"
                  external
                >
                 TinyTronics 
                </InlineLink>. 
                I work on internal projects that streamline different business processes.
                {" I graduated from "}
                <InlineLink
                  href="https://fontys.edu/"
                  rel="noreferrer"
                  external
                >
                  Fontys University of Applied Sciences
                </InlineLink>
                , majoring in Software engineering.
              </p>
              <p>
                My love for coding drives me to spend a lot of my free time
                programming on personal projects. I often find myself
                experimenting with and geeking out over new technologies.
              </p>
            </div>
          </section>
          <section className="p-4" aria-labelledby="experience">
            <Header.H2 id="experience" className="text-center">
              Experience
            </Header.H2>
            <motion.div
              className="flex flex-col gap-4 mt-4"
              initial="hidden"
              animate="show"
              variants={EXPERIENCE_CONTAINER_ANIMATION}
            >
              {experiences.map((experience, i, arr) => (
                <motion.div
                  key={i}
                  variants={
                    reduceMotion || initialLoad ? {} : EXPERIENCE_ANIMATION
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
            <Header.H2
              id="external-links"
              className="text-4xl font-medium text-center md:text-5xl"
            >
              External Links
            </Header.H2>
            <div className="flex flex-col gap-4">
              {externalLinks.map((externalLink, i) => (
                <ExternalLink key={i} {...externalLink} />
              ))}
            </div>
          </section>
          <section
            className="flex flex-col items-center text-center gap-4 p-4"
            aria-labelledby="blog"
          >
            <Header.H2
              id="blog"
              className="text-4xl font-medium text-center md:text-5xl"
              // id="projects"
              // className="absolute text-[0px]"
            >
              Blog
              {/*   Projects */}
            </Header.H2>
            <div>
              Do you want to know more? Have a look at my blog!
              {/* Actions speak louder then words! Have a look at my projects next */}
            </div>
            <LinkButton
              // href="/projects"
              href="/blog"
              className="block"
            >
              Go to my Blog
              {/* Go to my Projects */}
            </LinkButton>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
