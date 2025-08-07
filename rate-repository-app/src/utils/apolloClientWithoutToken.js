import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = ( ) => {

    const apolloUri = Constants.expoConfig.extra.apiUrl;
    console.log('apolloUri: ', apolloUri);

    return new ApolloClient({
        uri: apolloUri,   //'http://192.168.100.125:4000/graphql',
        cache: new InMemoryCache()
    });
};

export default createApolloClient;