import React, { Suspense } from "react";
import { render } from 'preact';
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import "./index.scss";

import Front from "views/Front";
import Layout from "views/Layout";

const Projects = React.lazy(() => import("views/Projects"));
const Timeline = React.lazy(() => import("views/Timeline"));
const Contact = React.lazy(() => import("views/Contact"));

const SuspenseRoute = ({ element }) => (
  <ErrorBoundary><Suspense fallback={<></>}>{element}</Suspense></ErrorBoundary>
);

render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Front />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="Projects" element={<SuspenseRoute element={<Projects />} />} />
          <Route path="Timeline" element={<SuspenseRoute element={<Timeline />} />} />
          <Route path="Contact" element={<SuspenseRoute element={<Contact />} />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('react-root')
);