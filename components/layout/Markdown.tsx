import { useEffect, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { style as inlineLinkStyle } from "components/navigation/InlineLink";
import useIsFirstRender from "hooks/useIsFirstRender";

const createStyled = <TTag extends keyof JSX.IntrinsicElements>(
  Tag: TTag,
  baseClassName: string,
) => {
  return ({ className, ...props }: React.ComponentProps<TTag>) => {
    const computedClassName = useMemo(() => {
      return { className: twMerge(baseClassName, className) } as any;
    }, [className]);

    return <Tag {...computedClassName} {...props} />;
  };
};

const Markdown = {
  h2: createStyled("h2", "text-4xl font-bold"),
  h3: createStyled("h3", "text-3xl font-bold"),
  h4: createStyled("h4", "text-2xl font-semibold"),
  h5: createStyled("h5", "text-xl font-semibold"),
  h6: createStyled("h6", "text-xl"),
  li: ({ id, className, ...props }: React.ComponentProps<"li">) => {
    const computedClassName = useMemo(
      () =>
        twMerge(
          id?.startsWith("user-content-fn-") ? "mb-2 [&>p]:inline" : "",
          className,
        ),
      [id, className],
    );

    return <li id={id} className={computedClassName} {...props} />;
  },
  ul: createStyled("ul", "list-inside list-disc"),
  ol: createStyled("ol", "list-inside list-decimal"),
  sup: ({ className, style, ...props }: React.ComponentProps<"sup">) => {
    const isFirstRender = useIsFirstRender();
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
      if (isFirstRender || !ref.current) return;
      
      if (
        ref.current.nextSibling?.nodeName === "SUP" ||
        ref.current.classList.contains("after:hidden")
      )
        return;

      ref.current.classList.add("after:hidden");
    }, [isFirstRender, ref]);

    const computedClassName = useMemo(
      () => twMerge("mr-1 after:content-[',']", className),
      [className],
    );

    return <sup className={computedClassName} ref={ref} {...props} />;
  },
  a: createStyled("a", inlineLinkStyle({ color: "primary", underline: true })),
  Img: Object.assign(
    ({
      baseUrl,
      src,
      className,
      ...props
    }: React.ComponentProps<"img"> & { baseUrl?: string }) => {
      const computedSrc = useMemo(
        () => (baseUrl ? baseUrl + "/" + src : src),
        [],
      );

      const computedClassName = useMemo(
        () => twMerge("rounded-md", className),
        [className],
      );

      return <img className={computedClassName} src={computedSrc} {...props} />;
    },
    {
      Subtitle: createStyled(
        "div",
        "text-sm text-center text-primary-contrast-low",
      ),
    },
  ),
  Split: ({
    className,
    style,
    leftSpan,
    rightSpan,
    ...props
  }: React.ComponentProps<"div"> & {
    leftSpan?: number;
    rightSpan?: number;
  }) => {
    const computedClassName = useMemo(
      () =>
        twMerge(
          "grid grid-cols-1 md:grid-cols-[var(--left-span),var(--right-span)] gap-8 justify-items-center",
          className,
        ),
      [className],
    );

    const computedStyle = useMemo(
      () =>
        Object.assign(
          {
            "--left-span": `${leftSpan ?? 1}fr`,
            "--right-span": `${rightSpan ?? 1}fr`,
          },
          style,
        ),
      [style, leftSpan, rightSpan],
    );

    return (
      <div className={computedClassName} style={computedStyle} {...props} />
    );
  },
  Gap: createStyled("div", "flex flex-col gap-8"),
  Flex: createStyled("div", "flex flex-col"),
};
export default Markdown;
