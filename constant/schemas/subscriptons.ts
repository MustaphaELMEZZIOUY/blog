import {boolean, object, string} from 'yup';

const subscriptionsFormSchema = object({
    email: string().required('Enter your email first please').email()
});

export default subscriptionsFormSchema;