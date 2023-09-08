import { useEffect, useRef, useState } from "react";
import { AppProps } from "next/app";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";

import MainLayout from "layouts/Main";

import "@fontsource/roboto-slab/100.css";
import "@fontsource/roboto-slab/200.css";
import "@fontsource/roboto-slab/300.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/600.css";
import "@fontsource/roboto-slab/700.css";
import "@fontsource/roboto-slab/800.css";
import "@fontsource/roboto-slab/900.css";

import "../styles/index.css";
import useIsFirstRender from "hooks/useIsFirstRender";
import { DefaultSeo, DefaultSeoProps } from "next-seo";

const PAGE_TRANSITION = {
  duration: 0.35,
  ease: "easeOut",
};

const PAGE_ANIMATION = {
  initial: {
    opacity: 0,
    translateX: "0%",
  },
  animate: {
    opacity: 100,
    translateX: "0%",
  },
  exit: {
    opacity: 0,
    translateX: "5%",
  },
};

const DEFAULT_SEO: DefaultSeoProps = {
  title: "Rik den Breejen | Portfolio",
  description: "Learn more about me and my exploration and passion for coding",
  openGraph: {
    title: "Rik den Breejen | Portfolio",
    description:
      "Learn more about me and my exploration and passion for coding",
    siteName: "Rik den Breejen Portfolio",
    type: "profile",
    profile: {
      firstName: "Rik",
      lastName: "den Breejen",
      username: "RikThePixel",
      gender: "male",
    },
    images: [
      {
        url: "website_image.jpg",
      },
    ],
  },
};

const App = ({ Component, pageProps, router }: AppProps) => {
  const previousPathname = useRef(router.pathname);
  const [initialLoad, setIntialLoad] = useState(true);
  const isFirstRender = useIsFirstRender();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (previousPathname.current !== router.pathname) setIntialLoad(false);
    previousPathname.current = router.pathname;
  }, [router.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <MainLayout>
        <AnimatePresence mode="wait">
          <motion.main
            key={router.pathname}
            aria-labelledby="page-header"
            className="flex flex-col flex-1 w-full"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={PAGE_TRANSITION}
            variants={isFirstRender || reduceMotion ? {} : PAGE_ANIMATION}
          >
            <DefaultSeo {...DEFAULT_SEO} />
            <Component initialLoad={initialLoad} {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </MainLayout>
    </MotionConfig>
  );
};

export default App;
