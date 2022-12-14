interface homePagePostsProps {
    cursor: string;
    node: {
    author: {
        bio: string;
        name: string;
        id: string;
        photo: {
            url: string;
        };
    };
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: {
        url: string;
    };
    categories: {
        name: string;
        slug: string;
    };
    };
};

export default homePagePostsProps;