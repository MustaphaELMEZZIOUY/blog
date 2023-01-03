import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { commentInitialValues } from '../constant/initialValues';
import { commentFormSchema, subscriptionsFormSchema } from '../constant/schemas';
import { submitComment } from '../services';
import { Loader, FailedMessage, SuccessMessage } from '.';
import { SuccesErrorAlert } from './alerts';

const CreateContactNLForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setshowErrorMessage] = useState(false);


    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={subscriptionsFormSchema}
            onSubmit={async (values, { resetForm, }) => {
                console.log('from CreateContactNLForm');

                const { email } = values;

                console.log({ values });


                const res = await fetch('/api/createNewsLetterContact', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })

                if (res.status == 200) {
                    setshowErrorMessage(false);
                    setShowSuccessMessage(true);
                    resetForm({
                        values: {
                            email: ""
                        }
                    })
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 10000);
                } else {
                    setShowSuccessMessage(false);
                    setshowErrorMessage(true);
                    setTimeout(() => {
                        setshowErrorMessage(false);
                    }, 10000);
                }
            }}
        >
            {
                ({ values, submitCount, errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="md:mb-6">
                                <Field
                                    as='input'
                                    name="email"
                                    type="email"
                                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                                    placeholder="Email"
                                />
                                {submitCount > 0 &&errors.email && <ErrorMessage name='email' className='text-red-500' />}
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button
                                    type="submit"
                                    className="inline-block  px-6 py-2  border-2  border-[#e6006f]  text-white  font-medium  text-xs  leading-tight  uppercase   bg-[#e6006f] rounded  hover:bg-[#c70060] hover:border-[#c70060] focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
                                >
                                    {
                                        isSubmitting ? 'Processing ...' : 'Subscribe'
                                    }
                                </button>
                            </div>
                        </div>
                        
                        {showSuccessMessage && <SuccesErrorAlert title='Congratulations' message='You are now one of the family' type='succes'/>}
                        {showErrorMessage && <SuccesErrorAlert title='Upps' message='Somethings Went Wrong!!!' type='error'/>}
                    </Form>
                )
            }
        </Formik >
    );
};


export default CreateContactNLForm;
