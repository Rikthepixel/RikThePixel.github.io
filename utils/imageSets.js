import { QuickSort } from "./sort";

export const generateSrcSet = (set) => {
    if (!Array.isArray(set)) return ["", set];

    const iconSet = QuickSort(set, (a, b) => a.width <= b.width);
    const smallestImage = iconSet[0];
    const srcSetString = iconSet.map((img) => `${img.src} ${img.width}w`).join(", ");

    return [srcSetString, smallestImage];
};