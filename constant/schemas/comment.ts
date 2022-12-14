import {boolean, object, string} from 'yup';

const commentFormSchema = object({
    name: string().required().min(3),
    email: string().required().email(),
    comment: string().required().min(5).max(250),
    storeData: boolean().optional(),
});

export default commentFormSchema;