interface featuredPostsInterface {
    author: {
        name: string;
        photo: {
            url: string;
        };
    };
    featuredImage: {
        url: string;
    };
    title: string;
    slug: string;
    createdAt: string;
}

export default featuredPostsInterface;