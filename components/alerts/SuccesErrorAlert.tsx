import React from 'react'
import { classNames } from '../../constant/functions'

const SuccesErrorAlert = ({ title, message, type }: { title: string, message: string, type: 'error' | 'succes' }) => {
    const isSucces = (type == 'succes');
    return (
        <div
            className="max-w-screen-xl mx-auto fixed bg-white inset-x-5  p-2 top-16 rounded-lg drop-shadow-2xl flex"
        >
            <div role="alert" className='w-full'>
                <div className={classNames(isSucces ? "bg-green-500" : "bg-red-500", "text-white font-bold rounded-t px-4 py-2")}>
                    {title}
                </div>
                <div className={classNames(isSucces ? "border-green-400 bg-green-100 text-green-700" : "border-red-400 bg-red-100 text-red-700", "border border-t-0 rounded-b  px-4 py-3")}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export {SuccesErrorAlert}