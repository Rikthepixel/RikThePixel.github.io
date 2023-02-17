import { SVGComponent } from "typings/svg";
import { getDefault } from "utils/import";

export interface Technology {
    name: string;
    link: string;
    icons: {
        dark: () => Promise<SVGComponent>;
        normal: () => Promise<SVGComponent>;
        light: () => Promise<SVGComponent>;
    };
}

const svgImport = (imported: Promise<(typeof import("*.svg"))>) => {
    return getDefault<SVGComponent>(imported);
};

export default {
    "vite": {
        name: "Vite",
        link: "https://vitejs.dev/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/vite/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/vite/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/vite/Light.svg"))
        }
    },
    "typescript": {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/typescript/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/typescript/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/typescript/Light.svg"))
        }
    },
    "javascript": {
        name: "JavaScript",
        link: "https://www.ecma-international.org/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/javascript/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/javascript/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/javascript/Light.svg"))
        }
    },
    "tailwindcss": {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/tailwindcss/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/tailwindcss/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/tailwindcss/Light.svg"))
        }
    },
    "sass": {
        name: "Sass",
        link: "https://sass-lang.com/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/sass/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/sass/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/sass/Light.svg"))
        }
    },
    "react": {
        name: "React",
        link: "https://reactjs.org/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/react/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/react/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/react/Light.svg"))
        }
    },
    "python": {
        name: "Python",
        link: "https://www.python.org/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/python/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/python/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/python/Light.svg"))
        }
    },
    "css": {
        name: "CSS",
        link: "https://www.w3.org/standards/webdesign/htmlcss/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/css/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/css/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/css/Light.svg"))
        }
    },
    "html": {
        name: "HTML",
        link: "https://www.w3.org/standards/webdesign/htmlcss/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/html/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/html/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/html/Light.svg"))
        }
    },
    "mui": {
        name: "Material UI",
        link: "https://mui.com/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/mui/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/mui/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/mui/Light.svg"))
        }
    },
    "csharp": {
        name: "C#",
        link: "https://dotnet.microsoft.com/en-us/languages/csharp/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/csharp/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/csharp/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/csharp/Light.svg"))
        }
    },
    "figma": {
        name: "Figma",
        link: "https://www.figma.com/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/figma/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/figma/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/figma/Light.svg"))
        }
    },
    "nextjs": {
        name: "NextJS",
        link: "https://nextjs.org/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/nextjs/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/nextjs/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/nextjs/Light.svg"))
        }
    },
    "nodejs": {
        name: "NodeJS",
        link: "https://nodejs.org/",
        icons: {
            dark: () => svgImport(import("res/images/icons/technologies/nodejs/Dark.svg")),
            normal: () => svgImport(import("res/images/icons/technologies/nodejs/Normal.svg")),
            light: () => svgImport(import("res/images/icons/technologies/nodejs/Light.svg"))
        }
    }
} satisfies Record<string, Technology>;