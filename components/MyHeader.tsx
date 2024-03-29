import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categoriesInterface } from '../constant/interfaces';
import { categories as dummyCategories } from '../constant/dummyData';
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { FcMenu } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';
import { classNames } from '../constant/functions';


interface myHeaderProps {
    categories: categoriesInterface[] | [];
}

// const MyHeader = ({categories}: myHeaderProps) => {
//     return (
//         <div className="container mx-auto px-10 mb-8">
//             <div className="border-b w-full inline-block border-blue-400 py-8">
//                 <div className="md:float-left block">
//                     <Link href="/">
//                         <span className="cursor-pointer font-bold text-4xl text-white">Graph CMS</span>
//                     </Link>
//                 </div>
//                 <div className="hidden md:float-left md:contents">
//                     {/* {categories?.map((category, index) => ( */}
//                     {dummyCategories?.map((category: any, index: number) => (
//                         <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }

// const MyHeader = ({categories}: myHeaderProps) => {
const MyHeader = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-20">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <MdClose className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FcMenu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <Link
                                    href='/'
                                >
                                    <div className="flex-shrink-0 flex items-center">
                                        <Image
                                            width={10}
                                            height={10}
                                            className="block lg:hidden h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <Image
                                            width={10}
                                            height={10}
                                            className="hidden lg:block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                </Link>
                                <div className="flex-initial w-full hidden sm:block sm:ml-6 text-white self-center">
                                    <div
                                        className="flex justify-center space-x-6"
                                    >
                                        {dummyCategories?.map((category: any, index: number) => (
                                            <Link
                                                key={index}
                                                href={`/category/${category.slug}`}
                                                className="hover:underline border-b-2 border-white px-2"
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <AiOutlineBell className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button
                                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <div
                                                className="h-8 w-8 rounded-full"
                                            >
                                                <Image
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                    width={80}
                                                    height={80}
                                                    className='rounded-full'
                                                />
                                            </div>
                                            {/* <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            /> */}
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden absolute bg-gray-800 w-full z-10">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {dummyCategories.map((category: any) => (
                                <Disclosure.Button
                                    key={category.name}
                                    // as="a"
                                    // href={category.href}
                                    className={classNames(
                                        category?.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={category.current ? 'page' : undefined}
                                >
                                    <Link
                                        href={`/category/${category.slug}`}
                                    >
                                        {category.name}
                                    </Link>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    <div id="spinnerParent" style={{ height: "2px" }} />
                </>
            )}
        </Disclosure>
    )
}

export default MyHeader;
