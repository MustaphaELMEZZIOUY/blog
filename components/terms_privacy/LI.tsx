import React from 'react'
import { Props } from '../../constant/interfaces'

export const LI = ({ children }: Props) => {
  return (
    <li className="text-lg text-gray-700 font-normal">
        {children}
    </li>
  )
}
