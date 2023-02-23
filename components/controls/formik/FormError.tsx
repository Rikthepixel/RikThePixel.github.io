import { useField } from "formik";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React from "react";

export interface FormErrorProps extends HTMLMotionProps<"div"> {
    name: string;
};

const FormError = ({ name, ...props }: FormErrorProps) => {
    const [, meta,] = useField(name);

    const error = meta.initialError ?? meta.error;

    return (
        <AnimatePresence>
            {error && <motion.div
                className="text-red-600"
                initial={{
                    opacity: 0,
                    translateX: "-5%"
                }}
                animate={{
                    opacity: 1,
                    translateX: "0%"
                }}
                {...props}
            >
                {error}
            </motion.div>}
        </AnimatePresence>
    );
};

export default FormError;