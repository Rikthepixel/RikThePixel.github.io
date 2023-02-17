import React from "react";
import Link, { LinkProps } from "next/link";

export type LinkButtonProps = {
    children?: React.ReactNode;
    beforeChildren?: React.ReactNode;
    afterChildren?: React.ReactNode;
} & LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & React.RefAttributes<HTMLAnchorElement>;

const LinkButton = ({ children, beforeChildren, afterChildren, className, ...props }: LinkButtonProps) => {
    return (
        <Link
            className={`bg-primary-900 font-medium rounded-md transition-colors px-4 py-2 hover:bg-primary-700 ${className ?? ""}`}
            {...props}
        >
            {beforeChildren}
            {children}
            {afterChildren}
        </Link>
    );
};

export default LinkButton;