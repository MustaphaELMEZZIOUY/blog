import React from 'react'

const FailedMessage = ({message}: {message: String}) => {
  return (
    <span
        className="text-lg float-right font-normal px-4 py-2 border border-red-600 bg-red-600 text-white rounded-lg"
    >
        {
            message
        }
    </span>
  )
}

export default FailedMessage