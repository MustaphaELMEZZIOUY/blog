import React from 'react'
import { Props } from '../../constant/interfaces'

export const UL = ({ children }: Props) => {
  return (
    <ul className="list-disc ml-16">
        {children}
    </ul>
  )
}
