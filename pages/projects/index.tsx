
import React from "react";
import Head from "next/head";
import {
    Formik,
    Form,
    Field
} from 'formik';

import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

import AutoComplete from "components/controls/formik/AutoComplete";
import FormError from "components/controls/formik/FormError";

interface ProjectsProps {

}

interface FilterValues {
    search: string;
}

const Projects = ({ }: ProjectsProps) => {

    return (
        <>
            <Head>
                <title>Rik den Breejen | Projects</title>
            </Head>
            <div className="grid grid-cols-[300px_1fr] w-full max-w-7xl mx-auto">
                <aside className="border-r border-neutral-600/50 p-4 ui-" aria-label="Filters and Storing">
                    <Formik
                        initialValues={{
                            search: ""
                        } as FilterValues}
                        onSubmit={(values, actions) => {
                            console.log({ values, actions });
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }}
                        validateOnChange
                    >
                        <Form onChange={(e) => console.log(e)}>
                            <label htmlFor="search">Search</label>
                            <AutoComplete
                                name="search"
                                options={["Portfolio Website V1", "React Router Sitemap Maker", "m-e-n-n-o.github.io", "Pinnote"]}
                            />
                            <FormError name="search" />
                        </Form>
                    </Formik>
                </aside>
                <div className="p-4">

                </div>
            </div >
        </>
    );
};

export default Projects;