import React, { ReactNode } from 'react';
import { categoriesInterface } from '../constant/interfaces';
import { MyHeader } from './';
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
            <div className='pt-8'>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
