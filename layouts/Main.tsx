import { ReactNode, useRef, useEffect } from "react";
import PageLink from "components/layout/PageLink";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <nav
        className="sticky w-full max-w-7xl mx-auto grid grid-cols-2 place-items-center text-white gap-2 p-4 top-0 z-10 sm:grid-cols-none sm:grid-flow-col"
      >
        <PageLink to="/">Home</PageLink>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/projects">Projects</PageLink>
        <PageLink to="/blog">Blog</PageLink>
      </nav>
      {children}
    </>
  );
};

export default MainLayout;
