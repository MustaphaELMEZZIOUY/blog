import React from 'react'
import { classNames } from '../../constant/functions'

const Label = ({ label, name, submitCount, error }: {label: string, name: string, submitCount: number, error: string}) => {
    return (
        <label htmlFor={name}
            // className={submitCount > 0 && error && labelStyleError || labelStyle}
            className={classNames((submitCount > 0 && error) ? "text-red-600" : "text-black-600", "block text-md font-medium")}
        >
            {label}
        </label>
    )
}

export {Label}