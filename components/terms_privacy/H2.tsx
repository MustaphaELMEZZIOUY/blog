import React from 'react'

export const H2 = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl font-semibold py-4 text-pink-600">
       {title}
    </h2>
  )
}