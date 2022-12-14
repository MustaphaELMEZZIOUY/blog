import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import homePagePostsProps from '../constant/interfaces/mainHomepage';

const getPosts: () => Promise<homePagePostsProps[]> = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
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

  const result = await request(graphqlAPI || '', query);


  return result?.postsConnection.edges;
};

export default getPosts;

