import { Field, useFormikContext } from 'formik'
import React from 'react'
import { contactUsFormFields } from '../../constant/interfaces';
import { Error_Message, Label } from '.';

const TextArea = ({ label, name }: contactUsFormFields) => {
    const { submitCount, errors }: { submitCount: number, errors: any } = useFormikContext();
    const fieldStyle = "p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
    const fieldStyleError = "p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-red-300 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"

    return (
        <>
            <Label label={label} name={name} error={errors[name] || ""} submitCount={submitCount} />
            <Field
                component="textarea"
                rows={5}
                name={name}
                id={name}
                autoComplete={name}
                className={submitCount > 0 && errors[name] && fieldStyleError || fieldStyle}
            />
            {
                submitCount > 0 && (
                    <Error_Message
                        name={name}
                    />
                )
            }
        </>
    )
}

export { TextArea };
