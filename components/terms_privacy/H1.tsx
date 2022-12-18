import React from 'react'

export const H1 = ({ title }: { title: string }) => {
  return (
    <h1 className="mt-4 mb-8 text-pink-600 md:text-3xl text-xl font-semibold">
       {title}
    </h1>
  )
}