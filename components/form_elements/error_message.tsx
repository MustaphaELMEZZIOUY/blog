import { ErrorMessage } from 'formik'
import React from 'react'

const Error_Message = ({ name }: { name: string }) => {
    const errorStyle = "text-red-600 text-sm"
    return (
        <ErrorMessage
            component='span'
            name={name}
            className={errorStyle}
        />
    )
}

export { Error_Message }