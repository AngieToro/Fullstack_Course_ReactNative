import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries';

const useRepositories = ( { orderDirection, orderBy, searchQuery } ) => {

    console.log('Orde direction: ', orderDirection);
    console.log('Order by; ', orderBy);
    
    const { data, loading, error } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            orderDirection,
            orderBy,
            searchKeyword: searchQuery
        }   
    });

    const repositories = data?.repositories?.edges.map(edge => edge.node) || [];
    //console.log('Repositories: ', repositories);

    return { repositories, loading, error };
};

export default useRepositories;