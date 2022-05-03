import { defineConfig } from "vite";
import svgr from '@honkhonk/vite-plugin-svgr';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        svgr()
    ],
    resolve: {
        alias: {
            "utils": "/src/utils",
            "res": "/src/res",
            "components": "/src/components",
            "views": "/src/views"
        }
    }
});