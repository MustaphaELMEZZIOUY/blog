import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import { postDetailsInterface } from '../constant/interfaces';

const getPostDetails: (slug: string) => Promise<postDetailsInterface> = async (slug: string) => {
  const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
          seo {
            seo_keywords
          }
        }
      }
    `;

  const result = await request(graphqlAPI || '', query, { slug });

  return result.post;
};

export default getPostDetails;