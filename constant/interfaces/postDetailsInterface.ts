import { authorInterface } from ".";

interface postDetailsInterface {
    title: string;
    excerpt: string;
    featuredImage: {
        url: string;
    };
    // author: {
    //     name: string;
    //     bio: string;
    //     photo: {
    //         url: string;
    //     }
    // };
    author: authorInterface;
    createdAt: string;
    slug: string;
    content: {
        raw: any;
    };
    categories: {
        name: string;
        slug: string;
    }[];
    seo: {
        seo_keywords: string[]
    }
}

export default postDetailsInterface;