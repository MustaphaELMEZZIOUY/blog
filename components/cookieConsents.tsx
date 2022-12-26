import React, { useState } from 'react'
import { classNames } from '../constant/functions'

const cookieConsents = () => {
  const [open, setOpen] = useState<boolean>(true)

  const handelDecline = () => {
    setOpen(false)
    console.log('hello from decline');

    setTimeout(() => setOpen(true), 1500)
  }

  const handelAcceptance = () => {
    // open = false, 
    setOpen(false)
    setTimeout(() => setOpen(true), 1500)
  }
  return (
      <div
        className={classNames(open ? "" : "hidden", "text-md max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-2 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between")}>
        <div className="w-full">This website uses cookies to ensure you get the best experience on our website.
          <a href="#" className="text-indigo-600 whitespace-nowrap  hover:underline">Learn more</a></div>
        <div className="flex gap-4 items-center flex-shrink-0">
          {/* <!-- setTimeout is for demo purposes only. Remove it & add to cookies
             so that the popup won't appear next time they load. --> */}
          <button onClick={handelDecline} className="text-indigo-600 focus:outline-none hover:underline">Decline</button>
          <button onClick={handelAcceptance} className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow Coockies</button>
        </div>
      </div >
  )
}

export default cookieConsents