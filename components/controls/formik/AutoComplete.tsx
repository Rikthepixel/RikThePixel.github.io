import { Combobox } from "@headlessui/react";
import { Field, GenericFieldHTMLAttributes, FieldConfig, FieldProps } from "formik";
import React, { useCallback, useMemo, useState } from "react";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

export type AutoCompleteProps = {
    name: string;
    options: string[];
} & GenericFieldHTMLAttributes & FieldConfig<string>;

const optionStyle = "rounded-md px-2 py-1 ui-active:bg-primary-900/25 ui-selected:bg-primary-900/50";

const InternalAutoComplete = ({ field, form, meta, ...additionalProps }: FieldProps<string>) => {
    const { options } = additionalProps as AutoCompleteProps;
    const [focussed, setFocussed] = useState(false);

    const onChange = useCallback((value: string) => {
        field.onChange({ target: { name: field.name, value } });
    }, [field.onChange, field.name]);

    const renderedOptions = useMemo(() => {
        const queryValue = field.value.toLowerCase().trim();
        let exactMatch = false;

        const rendered = options
            .filter((option) => {
                const optionValue = option.toLowerCase().trim();
                if (!exactMatch) exactMatch = optionValue === queryValue;
                return optionValue.indexOf(queryValue) !== -1;
            })
            .map((optionValue, i) => (
                <Combobox.Option key={i} value={optionValue} className={optionStyle}>
                    {optionValue}
                </Combobox.Option>
            ));

        if (rendered.length !== 1 || !exactMatch) {
            rendered.unshift(
                <Combobox.Option key={"nothing"} value={field.value.trim()} className={optionStyle}>
                    {field.value.trim() || <span className="invisible">-</span>}
                </Combobox.Option>
            );
        }

        return rendered;
    }, [options, field.value]);

    return (
        <Combobox as="div" className="relative" value={field.value} onChange={(value: string) => onChange(value)}>
            <div className="w-full relative flex items-center ui-selected:bg-red-500  border-2 border-primary-900 rounded-md focusable" data-focussed={String(focussed)}>
                <Combobox.Input
                    className={`w-full bg-transparent focus-visible:outline-none p-2`}
                    onChange={(e) => onChange(e.target.value)}
                    displayValue={(item: string) => item}
                    autoComplete="off"
                    onFocus={() => setFocussed(true)}
                    onBlur={() => setFocussed(false)}
                />
                <Combobox.Button className="absolute right-1 p-1 rounded-md">
                    <ChevronUpIcon className="text-primary-900 transition-transform ease-in-out w-6 h-6 ui-open:rotate-180" />
                </Combobox.Button>
            </div>
            <Combobox.Options className="absolute w-full top-[calc(100%+0.2rem)] bg-primary-100/10 backdrop-blur-sm border-primary-900 rounded-md border-2 p-2">
                {renderedOptions}
            </Combobox.Options>
        </Combobox >
    );

};


const AutoComplete = (props: AutoCompleteProps) => {
    return (
        <Field {...props} component={InternalAutoComplete} />
    );
};

export default AutoComplete;