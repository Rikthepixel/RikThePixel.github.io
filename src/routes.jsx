import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Front from "views/Front";
import Layout from "layouts/MainLayout";

const Projects = React.lazy(() => import("views/Projects"));
const Timeline = React.lazy(() => import("views/Timeline"));
const Contact = React.lazy(() => import("views/Contact"));

const SuspenseRoute = ({ element }) => (
    <Suspense fallback={<></>}>{element}</Suspense>
);

const index = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Front />} />
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="Projects" element={<SuspenseRoute element={<Projects />} />} />
                <Route path="Timeline" element={<SuspenseRoute element={<Timeline />} />} />
                <Route path="Contact" element={<SuspenseRoute element={<Contact />} />} />
            </Route>
        </Routes>
    );
};

export default index;