import React from 'react'
// import { Title } from '../components/Title'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { contactUsSchema } from '../constant/schemas'
import { Input, TextArea } from '../components/forms'
import { H1 } from '../components/terms_privacy/H1'

const ContactUs = () => {
    return (
        <div>
            <div className="text-center pt-5 md:pt-10 pb-2">
                <H1 title="Contact Us" />
                <p className="content-center mt-4 text-xl text-gray-500">
                    Any question or remarks? just write us a message!
                </p>
            </div>



            <div className="hidden sm:block" aria-hidden="true">
                <div className="pt-5 pb-10">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            {/* <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3> */}
                            <h3 className="block text-lg font-medium text-gray-800">Personal Information</h3>
                            <p className="mt-1 content-center mt-4 text-md text-gray-500">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0 px-2">
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                message: '',
                            }}
                            onSubmit={async (values) => {
                                console.log(values);
                                const res = await fetch('/api/contact', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json, text/plain, */*',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(values)
                                })

                                console.log('Response received')
                                
                                if (res.status === 200) {
                                    console.log({ res, body: res.body })
                                } else {
                                    console.log("Ups something went wrong!!!");
                                }
                            }}

                            validationSchema={contactUsSchema}
                        >
                            {(props) => (
                                <Form>
                                    <div className="overflow-hidden border shadow-lg sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <Input label="First Name" name="firstName" />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <Input label="Last Name" name="lastName" />
                                                </div>

                                                <div className="col-span-6 sm:col-span-5">
                                                    <Input label="Email" name="email" type="email" />
                                                </div>

                                                <div className="col-span-6">
                                                    <TextArea label="Message" name="message" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs