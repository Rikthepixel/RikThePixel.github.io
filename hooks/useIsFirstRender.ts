import { useState, useEffect } from "react";

/**
 * A helper hook to check if this is the first render of the current component
 */
export const useIsFirstRender = () => {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => setIsFirstRender(false), []);
    
    return isFirstRender;
};

export default useIsFirstRender;