import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export const style = cva("font-medium rounded-md transition-colors duration-500 px-3 py-2", {
  variants: {
    variant: {
      contained: "bg-primary-900 hover:bg-primary-700 border-primary-900 hover:border-primary-700",
      outlined: "text-primary-contrast border-primary-900 border-2 hover:border-primary-700",
    },
  },
});

interface ButtonProps
  extends VariantProps<typeof style>,
    React.ComponentProps<"button"> {}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={style({ className, variant })} {...props} />;
}
