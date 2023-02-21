import React from "react";
import Link, { LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";

export const style = cva("transition-colors", {
    variants: {
        color: {
            primary: "text-primary-900 hover:text-primary-700",
            white: "text-white hover:text-neutral-400"
        },
        underline: {
            true: "underline",
            false: "no-underline"
        }
    },
    defaultVariants: {
        color: "primary",
        underline: false
    }
});

export interface InlineLinkProps extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "color">,
    React.RefAttributes<HTMLAnchorElement>,
    VariantProps<typeof style>,
    LinkProps {
    children?: React.ReactNode;
    beforeChildren?: React.ReactNode;
    afterChildren?: React.ReactNode;
    external?: boolean;
};

const InlineLink = ({ children, beforeChildren, afterChildren, external, rel, className, color, underline, ...props }: InlineLinkProps) => {

    return (
        <Link
            className={style({ className, color, underline })}
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