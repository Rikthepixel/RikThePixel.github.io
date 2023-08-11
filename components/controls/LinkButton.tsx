import React from "react";
import Link, { LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";

export const style = cva("font-medium text-center rounded-md transition-colors px-4 py-2", {
    variants: {
        variant: {
            contained: "bg-primary-900 hover:bg-primary-700",
            outlined: "border-primary-900 border-2 hover:border-primary-700"
        }
    },
});

export interface LinkButtonProps extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    React.RefAttributes<HTMLAnchorElement>,
    VariantProps<typeof style>,
    LinkProps {
    children?: React.ReactNode;
    beforeChildren?: React.ReactNode;
    afterChildren?: React.ReactNode;
};

const LinkButton = ({ children, beforeChildren, afterChildren, className, variant = "contained", ...props }: LinkButtonProps) => {

    return (
        <Link
            className={style({
                className,
                variant
            })}
            {...props}
        >
            {beforeChildren}
            {children}
            {afterChildren}
        </Link>
    );
};

export default LinkButton;
