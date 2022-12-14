import Head from 'next/head';
import { PostCard, Categories, PostWidget, FeaturedPosts } from '../components';
import { categories, featuredPosts, posts, recentPosts } from '../constant/dummyData';
import { categoriesInterface, featuredPostsInterface, mainHomepageProps, postWidgetInterface } from '../constant/interfaces';
import { getCategories, getComments, getFeaturedPosts, getPostDetails, getPosts, getRecentPosts } from '../services';

interface homeProps {
  posts: mainHomepageProps[] | [];
  recentPosts: postWidgetInterface[] | [];
  categories: categoriesInterface[] | [];
  featuredPosts: featuredPostsInterface[] | []
}

// export default function Home({ posts, recentPosts, categories, featuredPosts }: homeProps) {
export default function Home() {

  return (
    <div className="container mx-auto md:px-10 px-3 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts featuredPosts={featuredPosts} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post: any, index: number) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative lg:top-20">
            <PostWidget title={`Recent Posts`} relatedPosts={recentPosts} />
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   const recentPosts = (await getRecentPosts()) || [];
//   const categories = (await getCategories()) || [];
//   const featuredPosts = (await getFeaturedPosts()) || []

//   // const postCommentsTest = (await getComments('react-testing')) || [];

//   // console.log({
//   //   // postCommentsTest
//   // });



//   return {
//     props: {
//       posts,
//       recentPosts,
//       categories,
//       featuredPosts
//     },

//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 7 days
//     // revalidate: 7 * 24 * 360, // In seconds
//   };
// }
