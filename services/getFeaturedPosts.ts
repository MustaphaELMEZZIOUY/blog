import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import { featuredPostsInterface } from '../constant/interfaces';

const getFeaturedPosts: () => Promise<featuredPostsInterface[]> = async () => {
  const query = gql`
  query GetCategoryPost() {
    posts(where: {featuredPost: true}) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      title
      slug
      createdAt
    }
  }   
`;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export default getFeaturedPosts;

