import React from "react";
import Link, { LinkProps } from "next/link";

export type InlineLinkProps = {
    children?: React.ReactNode;
    beforeChildren?: React.ReactNode;
    afterChildren?: React.ReactNode;
    external?: boolean;
} & LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & React.RefAttributes<HTMLAnchorElement>;

const InlineLink = ({ children, beforeChildren, afterChildren, external, rel, className, ...props }: InlineLinkProps) => {

    return (
        <Link
            className={`text-primary-900 transition-colors hover:text-primary-700 ${className ?? ""}`}
            target={external ? "_blank" : undefined}
            rel={`${external ? "external " : ""}${rel}`}
            {...props}
        >
            {beforeChildren}
            {children}
            {afterChildren}
        </Link>
    );
};

export default InlineLink;