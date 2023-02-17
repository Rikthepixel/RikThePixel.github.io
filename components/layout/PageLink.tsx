import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export interface PageLinkProps {
    to: string;
    className?: string;
    children: ReactNode;
}

const PageLink = ({ to, className, children }: PageLinkProps) => {
    const router = useRouter();

    const match = to === "/" ? router.asPath === "/" : router.asPath.includes(to);

    return (
        <Link
            href={to}
            aria-current={match ? "page" : undefined}
            className={`w-full text-lg text-center px-2 py-1 border-2 rounded-md transition-colors border-primary-700 hover:border-primary-900 active:hover:border-secondary aria-[current='page']:border-secondary sm:w-auto md:text-2xl ${className ?? ""}`}
        >
            {children}
        </Link>
    );
};

export default PageLink;
