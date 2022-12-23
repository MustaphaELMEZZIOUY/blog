import React from 'react'

const SubmitButton = ({isSubmitting, normalTitle, submittingTitle}: {isSubmitting: boolean, normalTitle: String, submittingTitle: String}) => {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
            {
                isSubmitting ? submittingTitle : normalTitle
            }
        </button>
    )
}

export {SubmitButton}