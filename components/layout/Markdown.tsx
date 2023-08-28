import { twMerge } from "tailwind-merge"

const createHeader = (Level: string, baseClassName: string) => {
  return ({ className, ...props }: any) => {
    return <Level className={twMerge(className, baseClassName)} {...props} />
  }
}

export default {
  h2: createHeader("h2", "text-4xl font-bold"),
  h3: createHeader("h3", "text-3xl font-bold"),
  h4: createHeader("h4", "text-2xl font-semibold"),
  h5: createHeader("h5", "text-xl font-semibold"),
  h6: createHeader("h6", "text-xl"),
  ul: ({ className, ...props}: any) => <ul className={twMerge("list-inside list-disc", className)} {...props} />,
  ol: ({ className, ...props}: any) => <ol className={twMerge("list-inside list-decimal", className)} {...props} />,
  li: ({ className, ...props}: any) => <li className={twMerge("", className)} {...props} />
} 

