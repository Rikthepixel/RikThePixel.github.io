import { motion, AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { AppProps } from 'next/app';

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

import "../styles/index.scss";
import useIsFirstRender from "hooks/useIsFirstRender";
import useTypeTitle from "hooks/useTypeTitle";

const pageTransition = {
    duration: .35,
    ease: "easeOut"
};

const pageAnimation = {
    initial: {
        opacity: 0,
        translateX: "0%"
    },
    animate: {
        opacity: 100,
        translateX: "0%",
    },
    exit: {
        opacity: 0,
        translateX: "5%"
    }
};

const App = ({ Component, pageProps, router }: AppProps) => {

    const isFirstRender = useIsFirstRender();
    const reduceMotion = useReducedMotion();

    useTypeTitle({
        updateKey: router.pathname,
        removePrefix: "Rik den Breejen | "
    });

    return (
        <MotionConfig reducedMotion="user">
            <MainLayout>
                <AnimatePresence mode="wait">
                    <motion.main
                        key={router.pathname}
                        aria-labelledby="page-header"
                        className="flex flex-col w-full h-[calc(100%_-_var(--nav-height))]"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                        variants={(isFirstRender || reduceMotion) ? {} : pageAnimation}
                    >
                        <Component {...pageProps} />
                    </motion.main>
                </AnimatePresence>
            </MainLayout>
        </MotionConfig >
    );
};

export default App;