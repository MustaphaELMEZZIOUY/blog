import React from 'react'

const Label = ({ label, name, submitCount, error }: {label: string, name: string, submitCount: number, error: string}) => {
    const labelStyle = "text-blue-600 block text-sm font-medium"
    const labelStyleError = "text-red-600 block text-sm font-medium"
    return (
        <label htmlFor={name}
            className={submitCount > 0 && error && labelStyleError || labelStyle}
        >
            {label}
        </label>
    )
}

export {Label}