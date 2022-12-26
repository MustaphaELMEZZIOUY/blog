import React, { ReactNode } from 'react';
import { categoriesInterface } from '../constant/interfaces';
import { CookieConsents, MyHeader } from './';
import Footer from './Footer';

interface layoutProps {
    categories: categoriesInterface[] | [];
    children: ReactNode;
}

const Layout = ({ categories, children }: layoutProps) => {
    return (
        <>
            <MyHeader
            // categories={categories} 
            />
            <div className='container mx-auto md:px-10 px-3 mb-8'>
                {children}
            </div>
            <CookieConsents/>
            <Footer />
        </>
    );
};

export default Layout;
