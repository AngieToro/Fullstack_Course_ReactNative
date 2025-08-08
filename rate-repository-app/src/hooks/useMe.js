import { useQuery } from '@apollo/client';
import { GET_USER_CONNECT } from '../graphql/queries';

const useMe = () => {

    const { data, loading } = useQuery(GET_USER_CONNECT, {
        fetchPolicy: 'cache-and-network'
    });
    
    return { data, loading };
};

export default useMe;