import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import { postWidgetInterface } from '../constant/interfaces';

const getSimilarPosts: (categories: string[], slug: string) => Promise<postWidgetInterface[]> = async (categories: string[], slug: string) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI || '', query, { slug, categories });

    return result.posts;
};

export default getSimilarPosts;