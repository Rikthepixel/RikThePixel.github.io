import { useEffect, useCallback, useState } from 'react';
import useIsFirstRender from "./useIsFirstRender";

function useMediaQuery(query: string): boolean {
    const isFirstRender = useIsFirstRender();

    const getMatches = useCallback((query: string): boolean => {
        // Prevents SSR issues
        if (typeof window !== 'undefined' && !isFirstRender) {
            return window.matchMedia(query).matches;
        }
        return false;
    }, [isFirstRender]);

    const [matches, setMatches] = useState<boolean>(getMatches(query));

    const handleChange = useCallback(
        () => setMatches(getMatches(query)),
        [setMatches, getMatches]
    );

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        handleChange();

        matchMedia.addListener
            ? matchMedia.addListener(handleChange)
            : matchMedia.addEventListener('change', handleChange);

        return () => {
            matchMedia.removeListener
                ? matchMedia.removeListener(handleChange)
                : matchMedia.removeEventListener('change', handleChange);
        };
    }, [handleChange, query]);

    return matches;
}

export default useMediaQuery;
