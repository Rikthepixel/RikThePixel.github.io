import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import NextLink from 'next/link';

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

interface PageLinkProps {
    to: string;
    children: ReactNode;
}

const PageLink = ({ to, children }: PageLinkProps) => {
    return (
        <NextLink href={to}>
            <a className="bg-purple-700 hover:bg-purple-500 hover:active:bg-purple-400 hover:active:text-zinc-600 current-page:bg-purple-900 text-center p-2 rounded-lg w-full md:basis-full shadow-lg">
                {children}
            </a>
        </NextLink>
    );
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <main aria-labelledby="page-header" className="relative h-full flex-1 flex flex-col overflow-y-auto items-center">
            <Component {...pageProps} />
            <div className="fixed bottom-0 w-full text-white">
                <nav
                    aria-label="Main"
                    className="py-4 px-6 grid grid-cols-[1fr_1fr] place-items-center gap-2 sm:flex sm:justify-around"
                >
                    <PageLink to="/">Home</PageLink>
                    <PageLink to="/Projects">Projects</PageLink>
                    <PageLink to="/Timeline">Timeline</PageLink>
                    <PageLink to="/Contact" >Contact</PageLink>
                </nav>
            </div>
        </main>
    );
};

export default App;