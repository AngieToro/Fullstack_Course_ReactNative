import { useQuery } from '@apollo/client';
import { GET_USER_CONNECT } from '../graphQL/queries';

const useMe = ( includeReviews= false ) => {

    console.log('includeReviews: ', includeReviews);

    const variables = { includeReviews };

    const { data, loading, error, refetch } = useQuery(GET_USER_CONNECT, {
        fetchPolicy: 'cache-and-network',
        variables
    });
    
    return { data, loading, error, refetch };
};

export default useMe;