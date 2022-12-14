import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { getCategories } from '../services';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';
// import { Router } from 'next/dist/client/router';


NProgress.configure({ showSpinner: false, parent: "#spinnerParent",});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})

Router.events.on('routeChangeError', () => {
  NProgress.remove();
})



function MyApp({ Component, pageProps }: AppProps) {
  // NextNprogress.configure({showSpinner: false})
  return (
    <>
      <Layout categories={pageProps?.categories || []}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

// // Fetch data at build time
// export async function getStaticProps() {
//   const categories = (await getCategories()) || [];

//   return {
//     props: {
//       categories
//     },
//   };
// }

export default MyApp
