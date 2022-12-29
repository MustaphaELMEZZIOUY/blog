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

const socialMediasAccounts = [
    {
        icon: FaFacebookF,
        color: '1877fe'
    },
    {
        icon: FaTwitter,
        color: '1da1f2'
    },
    {
        icon: FaGoogle,
        color: 'ea4335'
    },
    {
        icon: FaInstagram,
        color: 'c32aa3'
    },
    {
        icon: FaLinkedinIn,
        color: '0a66c2'
    },
    {
        icon: FaGithub,
        color: 'ffffff'
    }
]

const Footer = () => {

    return (
        <footer className="text-center bg-gray-900 text-white">
            <div className="container mx-auto px-5 lg:px-60 pt-6">
                <div className="flex items-center justify-center mb-6">
                    <a
                        href="#!"
                        type="button"
                        className={`
                            rounded-full border-2 border-[#1877fe]
                            bg-[#1877fe]  leading-normal uppercase 
                            p-none
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                        `}
                    >
                        <FaFacebookF
                            className={`w-2 h-full mx-auto hover:w-3`}
                        />
                    </a>

                    <a
                        href="#!"
                        type="button"
                        className={`
                            rounded-full border-2 border-[#1da1f2]
                            bg-[#1da1f2]  leading-normal uppercase 
                            p-none
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                        `}
                    >
                        <FaTwitter
                            className={`w-3 h-full mx-auto hover:w-4`}
                        />
                    </a>

                    <a
                        href="#!"
                        type="button"
                        className={`
                            rounded-full border-2 border-[#ea4335]
                            bg-[#ea4335]  leading-normal uppercase 
                            p-none
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                        `}
                    >
                        <FaGoogle
                            className={`w-3 h-full mx-auto hover:w-4`}
                        />
                    </a>

                    <a
                        href="#!"
                        type="button"
                        className={`
                            rounded-full border-2 border-[#e317b8]
                            bg-[#e317b8]  leading-normal uppercase 
                            p-none
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                        `}
                    >
                        <FaInstagram
                            className={`w-3 h-full mx-auto hover:w-4`}
                        />
                    </a>

                    <a
                        href="#!"
                        type="button"
                        className={`
                            rounded-full border-2 border-[#0a66c2]
                            bg-[#0a66c2]  leading-normal uppercase 
                            p-none
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                        `}
                    >
                        <FaLinkedinIn
                            className={`w-3 h-full mx-auto hover:w-4`}
                        />
                    </a>

                    <a
                        href="#!"
                        type="button"
                        className={`
                            rounded-full border-2 border-[#ffffff]
                            bg-[#ffffff] text-black leading-normal uppercase 
                            p-none
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1
                        `}
                    >
                        <FaGithub
                            className={`w-3 h-full mx-auto hover:w-4`}
                        />
                    </a>
                </div>

                <div>
                    <form id="sib-form" method="POST"
                        action="https://5d672bc0.sibforms.com/serve/MUIEACqE5QsChErgLQhPDSyHlwygXzngewb5cnrO0j9yrFKZeHF25QDtz_T3RV3wm81XWYQElGxNpkq294Yvqqc4JLUue7AiypVFfW-0kNuME9iIndx4Xh3LO5kyyREcsd4X6-uQOX6MSQipKWrf7U0veupxJ5uwE0GVXKgoJvIxCO86z6Bf-eIlHKLkGUn2laQ5hAuikvHAD98x"
                        data-type="subscription">
                        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="md:mb-6">
                                <input
                                    type="text" id="EMAIL" name="EMAIL"
                                    autoComplete="off"
                                    placeholder="EMAIL" data-required="true" required
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                />
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button
                                    form="sib-form"
                                    type="submit"
                                    className="inline-block  px-6 py-2  border-2  border-[#e6006f]  text-white  font-medium  text-xs  leading-tight  uppercase   bg-[#e6006f] rounded  hover:bg-[#c70060] hover:border-[#c70060] focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mb-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </div>

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
            </div>

            <div className="text-center p-4" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                &#169; {new Date().getFullYear()} Workflow, Inc: &nbsp;
                <a className="text-white" href="#">All rights reserved.</a>
            </div>
        </footer>
    );
};

export default Footer;
