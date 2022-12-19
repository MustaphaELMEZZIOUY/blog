// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql, GraphQLClient } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next'
import graphqlAPI from '../../constant';
import { boolean, object, string } from 'yup';
import * as uuid from 'uuid';
// import { rateLimit } from '../../utils';
import { limiter } from '../../constant/limiter';

// const limiter = rateLimit({
//   interval: 60 * 1000, // 60 seconds
//   uniqueTokenPerInterval: 500, // Max 500 users per second
// })

type Data = {
  message: string
}

const commentFormSchema = object({
  name: string().required().min(3).trim(),
  email: string().required().email().trim(),
  comment: string().required().min(5).max(250).trim(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await commentFormSchema.isValid(req.body);
    await limiter.check(res, 3, 'CACHE_TOKEN') // 3 requests per minute


    const graphQLClient = new GraphQLClient((graphqlAPI), {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
    });

    const query = gql`
      mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
      }
    `;

    const result = await graphQLClient.request(query, req.body);
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ message: 'Ups, something went wrong' })
  }
}
