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
                    className="top-0 z-10 grid w-full grid-cols-2 gap-2 px-6 py-4 text-white place-items-center sm:w-auto sm:grid-cols-none sm:grid-flow-col"
                >
                    <PageLink to="/">Home</PageLink>
                    <PageLink to="/about">About</PageLink>
                    {/* <PageLink to="/projects">Projects</PageLink>
                    <PageLink to="/blog" >Blog</PageLink> */}
                </nav>
                {children}
            </div>
        </>
    );
};

export default MainLayout;;