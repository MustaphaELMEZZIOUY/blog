const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const devEnvironment = process.env.NODE_ENV === 'development';




if (devEnvironment && !graphqlAPI) {
    console.log({graphqlAPI, devEnvironment});
    throw Error('A GraphCMS ENDPOINT must be provided!');
}

export default graphqlAPI;