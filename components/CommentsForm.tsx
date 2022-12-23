import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { commentInitialValues } from '../constant/initialValues';
import { commentFormSchema } from '../constant/schemas';
import { submitComment } from '../services';
import { Loader, FailedMessage, SuccessMessage } from '.';

const CommentsForm = ({ slug }: { slug: string }) => {
    const [localName, setLocalName] = useState<string>('');
    const [localEmail, setLocalEmail] = useState<string>('');
    const [localStoreData, setLocalStoreData] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        setLocalName(window.localStorage.getItem('name') || '');
        setLocalEmail(window.localStorage.getItem('email') || '');
        setLocalStoreData((state: boolean) => {
            return window.localStorage.getItem('name') && window.localStorage.getItem('email') ? true : false;
        });
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <Loader />
        )
    }


    return (
        <MyForm initialName={localName}
            initialEmail={localEmail}
            initialStoreData={localStoreData}
            slug={slug} />
    );
};

const MyForm = ({ initialName, initialEmail, initialStoreData, slug }: {
    initialName: string,
    initialEmail: string,
    initialStoreData: boolean,
    slug: string
}) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setshowErrorMessage] = useState(false);
    const [localStorage, setLocalStorage] = useState<Storage>();
    const initialValues = commentInitialValues(initialName, initialEmail, initialStoreData)

    useEffect(() => {
        setLocalStorage(window.localStorage)
    }, []);


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={commentFormSchema}
            onSubmit={(values, { resetForm, }) => {
                const { name, email, comment, storeData } = values;

                if (storeData) {
                    localStorage?.setItem('name', name);
                    localStorage?.setItem('email', email);
                } else {
                    localStorage?.removeItem('name');
                    localStorage?.removeItem('email');
                };

                submitComment({
                    name,
                    email,
                    comment,
                    slug
                }).then((res) => {
                    if (res.createComment) {
                        resetForm({
                            values: {
                                name: storeData ? values.name : '',
                                email: storeData ? values.email : '',
                                comment: '',
                                storeData: storeData
                            },
                        });
                        setshowErrorMessage(false);
                        setShowSuccessMessage(true);
                        setTimeout(() => {
                            setShowSuccessMessage(false);
                        }, 5000);
                    } else {
                        resetForm({
                            values: {
                                name: storeData ? values.name : '',
                                email: storeData ? values.email : '',
                                comment: values.comment,
                                storeData: storeData
                            },
                        });
                        setShowSuccessMessage(false);
                        setshowErrorMessage(true);
                        setTimeout(() => {
                            setshowErrorMessage(false);
                        }, 5000);
                    }
                });
            }}
        >
            {
                ({ values, submitCount, errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                            <section className="border-b pb-4 mb-8">
                                <h3 className="text-xl font-semibold">Leave a Reply</h3>
                                <p>Your email address will not be published.</p>
                            </section>
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <Field as='textarea' type='textarea' name='comment' className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Comment" />
                                {submitCount > 0 && errors.comment && touched.comment && <ErrorMessage name='comment' />}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <Field as='input' type="text" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name"/>
                                    {submitCount > 0 && <ErrorMessage name='name' />}
                                </div>

                                <div>
                                    <Field as='input' type="email" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
                                    {submitCount > 0 && <ErrorMessage name='email' className='text-red-700' />}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div>
                                    <Field as='input' type="checkbox" id="storeData" name="storeData" />
                                    <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
                                    {submitCount > 0 && <ErrorMessage name='storeData' className='text-red' />}
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col lg:flex-row items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                                >
                                    {
                                        isSubmitting ? 'Processing ...' : 'Post Comment'
                                    }
                                </button>
                                {/* {showSuccessMessage && <span className="text-lg float-right font-normal px-4 py-2 border border-teal-500 bg-teal-500 text-white rounded-lg">Comment submitted for review</span>}
                                {showErrorMessage && <span className="text-lg float-right font-normal px-4 py-2 border border-red-600 bg-red-600 text-white rounded-lg">Ups, Sorry, something went wrong, try again later.</span>} */}
                                {showSuccessMessage && <SuccessMessage message='Comment submitted for review'/>}
                                {showErrorMessage && <FailedMessage message='Ups, Sorry, something went wrong, try again later.'/>}
                            </div>

                        </div>
                    </Form>
                )
            }
        </Formik >
    )
}

export default CommentsForm;
