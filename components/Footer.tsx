import React from 'react';
import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaGoogle,
    FaInstagram,
    FaLinkedinIn,
    FaGithub
} from 'react-icons/fa';
import CreateContactNLForm from './CreateContactNLForm';
import { IconType } from 'react-icons/lib';
import { classNames } from '../constant/functions';

const socialMediasAccounts = [
    {
        link: '/',
        icon: FaFacebookF,
        color: '#1877fe',
        width: 2
    },
    {
        link: '/',
        icon: FaTwitter,
        color: '#1da1f2',
        width: 3
    },
    {
        link: '/',
        icon: FaGoogle,
        color: '#ea4335',
        width: 3
    },
    {
        link: '/',
        icon: FaInstagram,
        color: '#e317b8',
        width: 3
    },
    {
        link: '/',
        icon: FaLinkedinIn,
        color: '#0a66c2',
        width: 3
    },
    {
        link: '/',
        icon: FaGithub,
        color: '#ffffff',
        textColor: 'text-black',
        width: 3,
    }
]

const someLinks = [
    {
        label: "Terms & Conditions",
        href: "/terms_conditions"
    },
    {
        label: "Policy",
        href: "/privacy_policy"
    },
    {
        label: "Contact Us",
        href: "/contact_us"
    },
    {
        label: "About Us",
        href: "/xyz"
    },
]

const Footer = () => {
    const Icon = (IconNam: IconType, width: number) => {
        return <IconNam className={`w-${width} h-full mx-auto hover:w-${width + 1}`} />
    }

    return (
        <footer className="text-center bg-gray-900 text-white">
            <div className="container mx-auto py-6 lg:px-60">
                <div className="flex items-center justify-center mb-6">
                    {
                        socialMediasAccounts.map((item, index) => (
                            <a
                                type='button'
                                href={item?.link || "/"}
                                key={index}
                                rel="noopener noreferrer"
                                target='_blank'

                                className={
                                    `
                                        rounded-full border-2 border-[${item.color}]
                                        bg-[${item.color}] ${item?.textColor || ""}  leading-normal uppercase 
                                        p-none
                                        focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                                    `
                                }
                            >
                                {Icon(item.icon, item.width)}
                            </a>
                        ))
                    }

                </div>

                <div>
                    <CreateContactNLForm />
                </div>

                <div className="mb-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    {/* <h5 className="uppercase font-bold my-2.5">Terms & Conditions</h5>
                    <h5 className="uppercase font-bold my-2.5">Policy</h5>
                    <h5 className="uppercase font-bold my-2.5">Contact Us</h5>
                    <h5 className="uppercase font-bold my-2.5">About Us</h5> */}
                    {
                        someLinks.map((item) => (
                            <Link
                                href={item.href}
                                key={item.label}
                                className="uppercase font-bold my-2.5 underline"
                            >
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
                {/* 
                    *********************************************************************************************************
                    *********************************************************************************************************
                    *********************Do not delete this comment, it may become useful for a futur use********************
                    *********************************************************************************************************
                    *********************************************************************************************************
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-start">
                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5">Links</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                */}
            </div>

            <div className="text-center p-4" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                &#169; {new Date().getFullYear()} Workflow, Inc: &nbsp;
                <a className="text-white" href="#">All rights reserved.</a>
            </div>
        </footer >
    );
};

export default Footer;
