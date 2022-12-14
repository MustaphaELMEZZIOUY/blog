import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import { commentInterface } from '../constant/interfaces';

export const getComments: (slug: string) => Promise<commentInterface[]> = async (slug: string) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI || '', query, { slug });

  return result.comments;
};

export default getComments;