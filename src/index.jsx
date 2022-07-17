import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import "@fontsource/roboto-slab/100.css";
import "@fontsource/roboto-slab/200.css";
import "@fontsource/roboto-slab/300.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/600.css";
import "@fontsource/roboto-slab/700.css";
import "@fontsource/roboto-slab/800.css";
import "@fontsource/roboto-slab/900.css";

import "./index.scss";
import Routes from "./routes";

createRoot(
    document.getElementById('react-root')
).render(
    <React.StrictMode>
        <HashRouter>
            <Routes />
        </HashRouter>
    </React.StrictMode>
);
