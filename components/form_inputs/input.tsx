import React from 'react'
import { Field, useFormikContext } from 'formik'
import { contactUsFormFields } from '../../constant/interfaces';
import { Error_Message, Label } from './';

const Input = ({ label, name, type }: contactUsFormFields) => {
    const { submitCount, errors }: { submitCount: number, errors: any } = useFormikContext();
    const fieldStyle = "py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
    const fieldStyleError = "py-2 px-4 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-red-300 border-red-500 rounded-md shadow-sm focus:border-red-600 focus:ring-indigo-500"

    return (
        <>
            <Label label={label} name={name} error={errors[name] || ""} submitCount={submitCount} />
            <Field
                as="input"
                type={type || "text"}
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

export { Input };
