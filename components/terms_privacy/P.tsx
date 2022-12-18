import React from 'react'
import { Props } from '../../constant/interfaces'

const P = ({ children }: Props) => {
    return (
        <p className="text-lg text-gray-700 font-normal">
            {children}
        </p>
    )
}

export default P