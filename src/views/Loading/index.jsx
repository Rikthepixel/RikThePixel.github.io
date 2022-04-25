import React, { useEffect, useState } from "react";
import "./Loading.scss";

const Loading = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Loading";
    }, []);

    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;