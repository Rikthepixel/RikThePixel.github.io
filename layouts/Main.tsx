import { ReactNode, useRef, useEffect } from "react";
import PageLink from "components/layout/PageLink";

export interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {

    const navbarRef = useRef<HTMLElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!navbarRef.current) return;

        const updateNavHeight = (navbar: Element, main: HTMLElement) => {
            main.style.setProperty("--nav-height", `${navbar.clientHeight}px`);
        };
        const observer = new ResizeObserver((entries) => {
            if (!containerRef.current) return;
            updateNavHeight(entries[0].target, containerRef.current);
        });

        observer.observe(navbarRef.current);

        return () => observer.disconnect();
    }, [navbarRef.current, containerRef.current]);

    return (
        <>
            <div ref={containerRef} className="flex flex-col items-center h-full">
                <nav
                    ref={navbarRef}
                    className="grid grid-cols-2 place-items-center w-full sm:w-auto text-white gap-2 py-4 px-6 top-0 z-10 sm:grid-cols-none sm:grid-flow-col"
                >
                    <PageLink to="/">Home</PageLink>
                    <PageLink to="/about">About</PageLink>
                    <PageLink to="/projects">Projects</PageLink>
                    <PageLink to="/blog" >Blog</PageLink>
                </nav>
                {children}
            </div>
        </>
    );
};

export default MainLayout;;