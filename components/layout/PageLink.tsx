import { ReactNode, useMemo } from "react";
import { useRouter } from "next/router";
import LinkButton from "components/controls/LinkButton";
import { twMerge } from "tailwind-merge";

export interface PageLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

const PageLink = ({ to, className, children }: PageLinkProps) => {
  const router = useRouter();

  const match =
    to === "/" || router.pathname === "/404"
      ? router.asPath === "/"
      : router.asPath.includes(to);

  const computedClassName = useMemo(
    () =>
      twMerge(
        `w-full text-lg text-center bg-primary-100 shadow font-normal px-2 py-1 text-white hover:text-white active:hover:border-secondary aria-[current='page']:text-white aria-[current='page']:border-secondary md:text-2xl`,
        className,
      ),
    [className],
  );

  return (
    <LinkButton
      href={to}
      variant="outlined"
      aria-current={match ? "page" : undefined}
      className={computedClassName}
    >
      {children}
    </LinkButton>
  );
};

export default PageLink;
