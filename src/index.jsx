import "./index.scss";
import React from "react";
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
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
