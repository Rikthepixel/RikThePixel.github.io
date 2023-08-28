import React, { SVGAttributes } from "react";

export type SVGComponent = React.FC<SVGAttributes<SVGElement>>;

declare module "*.svg" {
    const SVG: SVGComponent;

    export default SVG;
}

declare module "next/image-types/global" {
    declare module "*.svg" {
        const SVG: SVGComponent;

        export default SVG;
    }
}