import useMediaQuery from 'hooks/useMediaQuery';
import { ReactNode } from 'react';

const generateAria = (hidden: boolean) => ({
    "aria-hidden": hidden,
    "aria-label": hidden ? "Hidden description" : "Description"
});

export interface DescriptionProps {
    shortDescription: ReactNode;
    longDescription: ReactNode;
}

const Description = ({ shortDescription, longDescription }: DescriptionProps) => {
    const isSmaller = useMediaQuery("(min-width: 640px)");

    return (<>
        <style jsx>
            {`
                .front_description {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    width: 100%;
                }

                .front_description[data-long="true"] {
                    display: none;
                }   

                .front_description[data-short="true"] {
                    display: flex;
                }   
                
                @media (min-width: 640px) {
                    .front_description {
                        width: auto;
                    }
                    .front_description[data-long="true"] {
                        display: flex;
                    }

                    .front_description[data-short="true"] {
                        display: none;
                    }
                }
            `}
        </style>
        <div
            {...generateAria(isSmaller)}
            className="front_description description"
            data-short
        >
            {shortDescription}
        </div>
        <div
            {...generateAria(!isSmaller)}
            className="front_description description"
            data-long
        >
            {longDescription}
        </div>
    </>
    );
};

export default Description;