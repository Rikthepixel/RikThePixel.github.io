import React from 'react';
import { AppProps } from 'next/app';

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


const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    );
};

export default App;