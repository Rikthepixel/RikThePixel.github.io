import React from 'react';
import useMediaQuery from "hooks/useMediaQuery";
import "./style.scss";

const generateAria = (hidden) => ({
    "aria-hidden": hidden.toString(),
    "aria-label": hidden ? "Hidden description" : "Description"
});

const Description = ({ shortDescription, longDescription }) => {
    const isLarger = useMediaQuery("(min-width: 640px)");

    return (
        <>
            <div
                {...generateAria(isLarger)}
                className="front_description description"
                data-short
            >
                {shortDescription}
            </div>
            <div
                {...generateAria(!isLarger)}
                className="front_description description"
                data-long
            >
                {longDescription}
            </div>
        </>
    );
};

export default Description;