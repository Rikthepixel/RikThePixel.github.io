import React, { PropsWithChildren } from 'react';

const Emoji = ({ children }: PropsWithChildren) => {
    return (
        <span className="font-sans">{children}</span>
    );
};

export default Emoji;