import { commentInitialValues } from "../constant/initialValues";

type reqType = {
    name: string,
    email: string,
    comment: string,
    slug: string,
  }

const submitComment = async (obj: reqType) => {
    const result = await fetch('/api/postComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};

export default submitComment;