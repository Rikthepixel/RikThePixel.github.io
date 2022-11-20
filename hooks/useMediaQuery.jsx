import { useEffect, useRef, useState } from 'react';

const getMatches = (query) => {
    if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches;
    }

    return false;
};

function useMediaQuery(query) {
    const [matches, setMatches] = useState(getMatches(query));

    useEffect(() => {
        const matchMedia = window.matchMedia(query);
        const handleChange = () => setMatches(getMatches(query));

        handleChange();

        matchMedia.addEventListener('change', handleChange);
        return () => {
            matchMedia.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;