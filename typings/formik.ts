declare module "formik/dist/Field.d.ts" {
    export declare type FieldAttributes<T> = GenericFieldHTMLAttributes & FieldConfig<T> & {
        name: string;
    };
}