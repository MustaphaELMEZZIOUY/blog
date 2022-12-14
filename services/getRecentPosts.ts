import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import postWidgetProps from '../constant/interfaces/postWidgetInterface';

const getRecentPosts: () => Promise<postWidgetProps[]> = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
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

  const result = await request(graphqlAPI || '', query);

  return result.posts;
};

export default getRecentPosts;

