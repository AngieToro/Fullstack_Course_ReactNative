import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries';

const useRepositories = () => {

    const { data, loading, error } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    const repositories = data?.repositories?.edges.map(edge => edge.node) || [];
    //console.log('Repositories: ', repositories);

    return { repositories, loading, error };
};

export default useRepositories;