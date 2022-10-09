import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PageLink = ({ className, ...props }) => {
    return <NavLink className="bg-purple-700 hover:bg-purple-500 hover:active:bg-purple-400 hover:active:text-zinc-600 current-page:bg-purple-900 text-center p-2 rounded-lg w-full md:basis-full shadow-lg" {...props} />;
};

const Layout = () => {

    return (
        <main aria-labelledby="page-header" className="relative h-full flex-1 flex flex-col overflow-y-auto items-center">
            <Outlet />
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

export default Layout;