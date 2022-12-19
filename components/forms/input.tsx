import { ErrorMessage, Field, useFormikContext } from 'formik'
import React from 'react'
import { contactUsFormFields } from '../../constant/interfaces';
import { labelStyle, fieldStyle, errorStyle, fieldStyleError, labelStyleError} from '../../constant/styles';

const Input = ({ label, name, type }: contactUsFormFields) => {
    const errorS: string = errorStyle;
    const { submitCount, errors } : {submitCount: number, errors: any} = useFormikContext();

    return (
        <>
            <label htmlFor={name} 
                className={submitCount > 0 && errors[name] && labelStyleError || labelStyle}
            >
                {label}
            </label>
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
                    <ErrorMessage
                        component='span'
                        name={name}
                        className={errorS}
                    />
                )
            }
        </>
    )
}

export { Input };
