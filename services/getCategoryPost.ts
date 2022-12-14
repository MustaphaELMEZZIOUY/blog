import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import homePagePostsProps from '../constant/interfaces/mainHomepage';

const getCategoryPost: (slug: string) => Promise<homePagePostsProps[]> = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI || '', query, { slug });

  return result.postsConnection.edges;
};

export default getCategoryPost;