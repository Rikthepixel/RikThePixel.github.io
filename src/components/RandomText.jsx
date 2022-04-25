import React, { useEffect, useState } from 'react';

const RandomText = ({ options }) => {
    const [text, setText] = useState("");
    useEffect(() => {
        setText(
            options[Math.floor(Math.random() * options.length)]
        );
    }, []);
    return (
        <>
            {text}
        </>
    );
};

export default RandomText;