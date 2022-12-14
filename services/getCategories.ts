import { request, gql } from 'graphql-request';
import graphqlAPI from '../constant';
import { categoriesInterface } from '../constant/interfaces';

const getCategories: () => Promise<categoriesInterface[]> = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI || '', query);

  return result.categories;
};

export default getCategories;