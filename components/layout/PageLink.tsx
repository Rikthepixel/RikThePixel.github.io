import { ReactNode } from "react";
import { useRouter } from "next/router";
import LinkButton from "components/controls/LinkButton";

export interface PageLinkProps {
    to: string;
    className?: string;
    children: ReactNode;
}

const PageLink = ({ to, className, children }: PageLinkProps) => {
    const router = useRouter();

    const match = (to === "/" || router.pathname === "/404") ? router.asPath === "/" : router.asPath.includes(to);

    return (
        <LinkButton
            href={to}
            variant="outlined"
            aria-current={match ? "page" : undefined}
            className={`w-full text-lg text-center is:font-normal is:px-2 is:py-1 is:text-white is:hover:text-white active:hover:border-secondary aria-[current='page']:text-white aria-[current='page']:border-secondary sm:w-auto md:text-2xl ${className ?? ""}`}
        >
            {children}
        </LinkButton>
    );
};

export default PageLink;
