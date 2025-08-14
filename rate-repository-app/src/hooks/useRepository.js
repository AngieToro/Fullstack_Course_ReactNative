import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphQL/queries';

const useRepository = ( id ) => {

    const { data, loading, error } = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: id },
        fetchPolicy: 'cache-and-network',
        skip: !id, // evita ejecutar si no hay ID aún
    });

    //console.log('Repository: ', data);
    const repository = data?.repository;

    return { repository, loading, error };
};

export default useRepository;