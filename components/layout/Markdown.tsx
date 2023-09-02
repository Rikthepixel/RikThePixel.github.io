import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { style as inlineLinkStyle } from "components/navigation/InlineLink";

const createHeader = (Level: string, baseClassName: string) => {
  return ({ className, ...props }: any) => {
    const computedClassName = useMemo(() => {
      return twMerge(baseClassName, className);
    }, [className]);

    return <Level className={computedClassName} {...props} />;
  };
};

export default {
  h2: createHeader("h2", "text-4xl font-bold"),
  h3: createHeader("h3", "text-3xl font-bold"),
  h4: createHeader("h4", "text-2xl font-semibold"),
  h5: createHeader("h5", "text-xl font-semibold"),
  h6: createHeader("h6", "text-xl"),
  li: ({ id, className, ...props }: React.ComponentProps<"li">) => {
    const computedClassName = useMemo(
      () => twMerge(id?.startsWith("user-content-fn-") ? "mb-2 [&>p]:inline" : "", className),
      [id, className],
    );

    return <li id={id} className={computedClassName}  {...props} />;
  },
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => {
    const computedClassName = useMemo(
      () => twMerge("list-inside list-disc", className),
      [className],
    );

    return <ul className={computedClassName} {...props} />;
  },
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => {
    const computedClassName = useMemo(
      () => twMerge("list-inside list-decimal", className),
      [className],
    );

    return <ol className={computedClassName} {...props} />;
  },
  sup: ({ className, ...props }: React.ComponentProps<"sup">) => {
    const computedClassName = useMemo(
      () =>
        twMerge(
          "mr-1 after:content-[','] last-of-type:mr-0 last-of-type:after:hidden",
          className,
        ),
      [className],
    );

    return <sup className={computedClassName} {...props} />;
  },
  a: ({ className, ...props }: React.ComponentProps<"a">) => {
    const computedClassName = useMemo(
      () =>
        twMerge(
          inlineLinkStyle({ color: "primary", underline: true }),
          className,
        ),
      [className],
    );

    return <a className={computedClassName} {...props} />;
  },
};
