import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import { categoriesInterface, mainHomepageProps } from '../../constant/interfaces';

interface categoriesProps {
    posts: mainHomepageProps[] | [];
    categories: categoriesInterface[] | [];
  }

const CategoryPost = ({ posts, categories }: categoriesProps) => {

    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto md:px-10 px-3 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky lg:top-20">
                        <Categories categories={categories}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const getStaticProps: GetStaticProps = async (context) => {
    const mySlugParam = context?.params?.slug as string | string[];
    const slug = typeof mySlugParam === 'object' ? mySlugParam[0] : mySlugParam;

    const posts = await getCategoryPost(slug || '');
    const categories = (await getCategories()) || [];

    return {
        props: {
            posts,
            categories
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 7 days
        revalidate: 7 * 24 * 3600, // In seconds
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await getCategories();

    // Get the paths we want to pre-render based on posts
    const paths = categories?.map(({ slug }) => ({ params: { slug } }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {
        paths,
        fallback: 'blocking'
    }
}

export default CategoryPost;