import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'
import { getCategories, getComments, getPostDetails, getPosts, getSimilarPosts } from '../../services';
import { categoriesInterface, commentInterface, postDetailsInterface, postWidgetInterface } from '../../constant/interfaces';
import { useRouter } from 'next/router';
import { Author, Categories, Comments, CommentsForm, Loader, PostDetail, PostWidget } from '../../components';
import Head from 'next/head';

interface postProps {
    postDetails: postDetailsInterface;
    relatedPosts: postWidgetInterface[] | [];
    categories: categoriesInterface[] | [];
    comments: commentInterface[] | []
}

const Post = ({ postDetails, relatedPosts, categories, comments }: postProps) => {

    const router = useRouter();

    console.log(postDetails);


    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-3">
            <div className="col-span-1 lg:col-span-8">
                <PostDetail post={postDetails} />
                <Author author={postDetails.author} />
                {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
                <CommentsForm slug={postDetails.slug} />
                {comments?.length > 0 && <Comments comments={comments} />}
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky lg:top-20">
                    <PostWidget title='Related Posts' relatedPosts={relatedPosts} />
                    <Categories categories={categories} />
                </div>
            </div>
        </div>
    );
};


export const getStaticProps: GetStaticProps = async (context) => {
    const mySlugParam = context?.params?.slug as string | string[];

    const slug = typeof mySlugParam === 'object' ? mySlugParam[0] : mySlugParam;

    const postDetails = (await getPostDetails(slug || '')) || null;
    const categories = (await getCategories()) || [];
    const relatedPosts = (await getSimilarPosts(postDetails.categories.map((category) => category.slug), slug || '')) || null;
    const comments = (await getComments(slug || '')) || [];

    return {
        props: {
            postDetails,
            relatedPosts,
            categories,
            comments
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 7 days
        revalidate: 7 * 24 * 3600, // In seconds
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = (await getPosts()) || [];

    // Get the paths we want to pre-render based on posts
    const paths = posts?.map(({ node: { slug } }) => ({ params: { slug } }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {
        paths,
        fallback: 'blocking'
    }
}

export default Post;