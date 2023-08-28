import Head from "next/head";
import Link from "next/link";
import { useMemo, useEffect, useState, ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Portal } from "@headlessui/react"

import GithubIcon from "res/images/icons/Github.svg";
import LinkedInIcon from "res/images/icons/LinkedIn.svg";

import RikPictureOutline from "res/images/graphics/rik-picture-outline.webp";
import technologies from "res/state/technologies";
import LinkButton from "components/controls/LinkButton";
import { SECONDS_PER_ICON } from "config/front";

const createMarqueeAnimation = (
  fromTo: [string, string],
  duration: number,
) => ({
  y: fromTo,
  transition: {
    y: {
      repeat: Infinity,
      repeatType: "loop",
      duration: duration,
      ease: "linear",
    },
  },
});

const pictureAnimationTransition = {
  duration: 0.25,
  ease: "linear",
};

const pictureAnimation: Variants = {
  initial: { translate: "2rem 0rem" },
  animate: { translate: "0rem 0rem" },
  exit: { translate: "4rem 0rem" },
};

const Front = () => {
  const reduceMotion = useReducedMotion();

  const [techIcons, setTechIcons] = useState<ReactNode[] | undefined>(
    undefined,
  );

  const links = useMemo(
    () =>
      [
        {
          label: "Github",
          to: "https://github.com/Rikthepixel",
          icon: GithubIcon,
        },
        {
          label: "LinkedIn",
          to: "https://linkedin.com/in/rik-den-breejen-a84aa71a7",
          icon: LinkedInIcon,
        },
      ] as const,
    [],
  );

  useEffect(() => {
    const iconTasks = Object.values(technologies).map(async (tech) => {
      return await tech.icons.dark();
    });

    Promise.all(iconTasks).then((icons) =>
      setTechIcons(
        icons.map((Icon, i) => (
          <Icon
            key={i}
            className="w-12 aspect-square motion-safe:transition-all sm:w-16 md:w-20 lg:w-28"
          />
        )),
      ),
    );
  }, []);

  const [topMarqueeAnim, bottomMarqueeAnim] = useMemo(() => {
    return !techIcons
      ? [{}, {}]
      : ([
          createMarqueeAnimation(
            ["-100%", "0%"],
            techIcons.length * SECONDS_PER_ICON,
          ),
          createMarqueeAnimation(
            ["0%", "100%"],
            techIcons.length * SECONDS_PER_ICON,
          ),
        ] as const);
  }, [techIcons]);

  return (
    <>
      <Head>
        <title>Rik den Breejen | Portfolio</title>
      </Head>
      <div className="flex flex-col flex-1 w-full items-center">
        <div className="flex flex-col flex-1 p-2 sm:p-4 gap-4 sm:gap-8 text-center justify-center text-shadow-md text-shadow-primary-100 text-shadow-opacity-40">
          <h1 id="page-header" className="flex flex-col gap-4 sm:gap-8">
            <div className="text-4xl px-4 motion-safe:transition-all sm:text-5xl sm:px-0 md:text-6xl">
              Rik den Breejen
            </div>
            <div className="text-2xl motion-safe:transition-all text-primary-900 font-black mt-auto sm:font-semibold sm:text-3xl md:font-normal md:text-4xl md:mt-0">
              Software Engineer
            </div>
          </h1>
          <div className="flex justify-center gap-4">
            {links.map((link, i) => (
              <Link
                key={i}
                className="transition-colors rounded-full hover:text-neutral-300 active:hover:text-neutral-400"
                href={link.to}
                aria-label={link.label}
              >
                <link.icon
                  className="w-12 aspect-square motion-safe:transition-all border rounded-full shadow-md shadow-primary-100/50  border-primary-100/75 sm:w-16"
                  role="presentation"
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-0 mb-12 md:mb-0 md:mt-8">
            <LinkButton
              href="/about"
              className="text-lg text-shadow-none transition-all md:text-xl md:px-5 md:py-3"
            >
              Learn More About Me
            </LinkButton>
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pictureAnimationTransition}
            variants={reduceMotion ? {} : pictureAnimation}
            aria-hidden
          >
            <div className="relative w-full h-full max-w-7xl">
              <img
                className="absolute right-0 bottom-0 h-[110%] w-auto object-cover sm:h-full sm:object-contain object-bottom aspect-auto"
                src={RikPictureOutline.src}
                height={RikPictureOutline.height}
                width={RikPictureOutline.width}
              />
            </div>
          </motion.div>
          {techIcons && (
            <Portal>
              <div
                className="fixed overflow-visible h-full top-0 left-8 -z-20 opacity-750 motion-reduce:flex motion-reduce:flex-col motion-reduce:gap-8 motion-reduce:flex-wrap motion-reduce:top-8"
                aria-label="Used Technology Icons"
                aria-hidden
              >
                {reduceMotion ? (
                  techIcons
                ) : (
                    <>
                      <motion.div
                        className="absolute flex flex-col gap-8 py-4"
                        animate={topMarqueeAnim}
                      >
                        {techIcons}
                      </motion.div>
                      <motion.div
                        className="absolute flex flex-col gap-8 py-4"
                        animate={bottomMarqueeAnim}
                      >
                        {techIcons}
                      </motion.div>
                    </>
                  )}
              </div>
            </Portal>
          )}
        </div>
      </div>
    </>
  );
};

export default Front;
