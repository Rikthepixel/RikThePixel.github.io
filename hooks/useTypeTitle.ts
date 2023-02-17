import { useEffect } from "react";

export interface TypeOptions {
    updateKey?: string;
    removePrefix?: string;
    upTypeSpeed?: number;
    downTypeSpeed?: number;
}

const makeNewTitle = (titleToType: string, lengthTyped: number, removePrefix?: string) => (removePrefix ?? "") + titleToType.substring(0, lengthTyped);

const useTypeTitle = ({ removePrefix, upTypeSpeed = 175, downTypeSpeed = 50, updateKey }: TypeOptions) => {

    useEffect(() => {
        let interval: NodeJS.Timer | undefined = undefined;
        if (typeof document === "undefined") return;

        const timeout = setTimeout(() => {
            let titleToType = document.title;

            if (removePrefix && titleToType.startsWith(removePrefix)) {
                titleToType = titleToType.replace(removePrefix, "");
            }

            let lengthTyped = titleToType.length;

            interval = setInterval(() => {
                lengthTyped -= 1;
                document.title = makeNewTitle(titleToType, lengthTyped, removePrefix);

                if (lengthTyped !== 0) return;

                clearInterval(interval);
                interval = setInterval(() => {
                    lengthTyped += 1;
                    document.title = makeNewTitle(titleToType, lengthTyped, removePrefix);

                    if (lengthTyped !== titleToType.length) return;
                    clearInterval(interval);
                }, upTypeSpeed);
            }, downTypeSpeed);
        }, 500);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [updateKey, removePrefix, upTypeSpeed, downTypeSpeed]);
};

export default useTypeTitle;