import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface LinkProps extends NextLinkProps {
    className?: string;
    children: ReactNode;
}
const Link = ({ className, href, children, ...props }: LinkProps) => {
    return (
        <NextLink
            href={href}
            passHref
            {...props}
        >
            <a
                className={`transition-colors duration-200 ${className} w-fit text-white bg-purple-700 hover:bg-purple-500 rounded-md px-[1.5ch] py-[0.5ch] inline-block`}
            >
                {children}
            </a>
        </NextLink>
    );
};

export default Link;