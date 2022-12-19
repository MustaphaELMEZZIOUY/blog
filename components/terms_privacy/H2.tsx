import React from 'react'

export const H2 = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl font-semibold pb-2 pt-8 text-pink-600">
       {title}
    </h2>
  )
}