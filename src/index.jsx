import "./index.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Routes from "./routes";


const root = createRoot(document.getElementById('react-root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes />
        </HashRouter>
    </React.StrictMode>
);