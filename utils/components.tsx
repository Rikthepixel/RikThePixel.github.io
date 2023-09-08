import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export const createStyled = <TTag extends keyof JSX.IntrinsicElements>(
  Tag: TTag,
  baseClassName: string,
) => {
  return ({ className, ...props }: React.ComponentProps<TTag>) => {
    const computedClassName = useMemo(
      () => ({ className: twMerge(baseClassName, className) }) as any,
      [className],
    );

    return <Tag {...computedClassName} {...props} />;
  };
};
