import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';

const createApolloClient = ( authStorage ) => {

    const apolloUri = Constants.expoConfig.extra.apiUrl;
    console.log('apolloUri: ', apolloUri);

    const httpLink = createHttpLink({
        uri: apolloUri
    });

    const authLink = setContext( async (_, { headers } ) => {

        const token = await authStorage.getAccessToken();
        console.log('Token: ', token);
        
        return{
            headers: {
                ...headers,
                authorization: token ? `Bearer ${ token }`: '',
            },
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};

export default createApolloClient;