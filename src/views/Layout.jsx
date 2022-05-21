import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PageLink = ({ className, ...props }) => {
    return <NavLink className="bg-secondary hover:bg-active hover:active:bg-light hover:active:text-zinc-600 current-page:bg-dark text-center p-2 rounded-lg w-full md:basis-full shadow-lg" {...props} />;
};

const Layout = () => {

    return (
        <div className="flex flex-1 justify-between flex-col relative">
            <main aria-labelledby="page-header" className="flex-1 flex flex-col overflow-y-auto items-center">
                <Outlet />
            </main>
            <div className="absolute bottom-0 w-full text-white">
                <nav
                    aria-label="Main"
                    className="py-4 px-6 grid grid-cols-[1fr_1fr] place-items-center gap-2 sm:flex sm:justify-around"
                >
                    <PageLink to="/">Home</PageLink>
                    <PageLink to="/Projects">Projects</PageLink>
                    <PageLink to="/Timeline">Coming Soon</PageLink>
                    <PageLink to="/Contact" >Contact</PageLink>
                </nav>
            </div>
        </div >
    );
};

export default Layout;