import { defineConfig } from "vite";
import svgr from '@honkhonk/vite-plugin-svgr';
import prefresh from "@prefresh/vite";

export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`,
    },
    plugins: [
        prefresh(),
        svgr()
    ],
    resolve: {
        alias: {
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
            "react": "preact/compat",
            "react/jsx-runtime": "preact/jsx-runtime",
            "res": "/src/res",
            "components": "/src/components",
            "views": "/src/views"
        }
    }
});