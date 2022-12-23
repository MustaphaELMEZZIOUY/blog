import React from 'react'

const SuccessMessage = ({message}: {message: String}) => {
  return (
    <span
        className="text-lg float-right font-normal px-4 py-2 border border-teal-500 bg-teal-500 text-white rounded-lg"
    >
        {
            message
        }
    </span>
  )
}

export default SuccessMessage