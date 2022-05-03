import "./index.scss";
import React from "react";
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Routes from "./routes";

const getRoot = () => {
    const rootElement = document.getElementById('react-root');
    return rootElement.hasChildNodes() ? hydrateRoot(rootElement) : createRoot(rootElement);
};

const root = getRoot();

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes />
        </HashRouter>
    </React.StrictMode>
);