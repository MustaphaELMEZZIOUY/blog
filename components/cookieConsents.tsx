import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCookieBite } from 'react-icons/fa';
import { allowCookies } from '../constant/cookies';
import { classNames, cookiesHandler } from '../constant/functions'
import Loader from './Loader';

const cookieConsents = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handelDecline = () => {
    // window.localStorage.removeItem('allowCookies')
    cookiesHandler.removeCookie(allowCookies)
    setOpen(false)
  }

  const handelAcceptance = () => {
    // open = false, 
    // window.localStorage.setItem('allowCookies', 'yes')
    cookiesHandler.setCookie(allowCookies, 'yes', 30)
    setOpen(false)
  }

  useEffect(() => {
    setIsLoading(true);
    // setOpen(window.localStorage.getItem('allowCookies') ? false : true)
    setOpen(cookiesHandler.getCookie(allowCookies) ? false : true)
    setIsLoading(false);
  }, []);

  return (
    <div
      className={classNames(open ? "" : "hidden", "text-md max-w-screen-xl mx-auto fixed bg-white inset-x-5 p-5 bottom-2 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between")}
    >
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full md:flex md:items-center">
              <FaCookieBite className='mr-2 w-500 h-500 text-orange-200' />
              This website uses cookies to ensure you get the best experience on our website.
              <Link
                href="/terms_conditions#cookies"
                className="text-indigo-600 whitespace-nowrap  hover:underline"
              >
                Learn more
              </Link>
            </div>
            <div className="flex gap-4 items-center flex-shrink-0">
              {/* <!-- setTimeout is for demo purposes only. Remove it & add to cookies
             so that the popup won't appear next time they load. --> */}
              <button onClick={handelDecline} className="text-indigo-600 focus:outline-none hover:underline">Decline</button>
              <button onClick={handelAcceptance} className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow Cookies</button>
            </div>
          </>
        )
      }
    </div >
  )
}

export default cookieConsents