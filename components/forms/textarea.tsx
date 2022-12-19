import { ErrorMessage, Field, useFormikContext } from 'formik'
import React from 'react'
import { contactUsFormFields } from '../../constant/interfaces';
import { errorStyle, fieldStyle, fieldStyleError, labelStyle, labelStyleError } from '../../constant/styles';

const TextArea = ({ label, name}: contactUsFormFields) => {

    const { submitCount, errors } : {submitCount: number, errors: any} = useFormikContext();

    return (
        <>
            <label htmlFor={name} className={submitCount > 0 && errors[name] && labelStyleError || labelStyle}>
                {label}
            </label>
            <Field
                // as="input"
                component="textarea"
                rows={5}
                // type="text"
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
                        className={errorStyle}
                    />
                )
            }
        </>
    )
}

export { TextArea };
