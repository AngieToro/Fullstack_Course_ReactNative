import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphQL/queries';

const useRepository = ( { id, first } ) => {

    const variables = { 
        repositoryId: id,
        first
    };

    const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORY, {
        variables,
        fetchPolicy: 'cache-and-network',
        skip: !id, // evita ejecutar si no hay ID aún
    });

    //paginacion 
    const handleFetchMore = () => {

        //Verifica que no esté cargando y que sí haya más datos (hasNextPage)
        const canFecthMore = !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;

        if (!canFecthMore) return;
        
        //Llama a Apollo para pedir más datos con after: endCursor
        fetchMore({
            query: GET_REPOSITORY,
            variables: {
                ...variables,
                after: data.repository?.reviews?.pageInfo.endCursor
            },
            //Une los datos anteriores con los nuevos (edges.concat)
            updateQuery: ( previousResult, { fetchMoreResult }) => {

                if (!fetchMoreResult) return previousResult;

                const nextResult = {
                    repository: {
                        ...fetchMoreResult.repository,
                        reviews:{
                            ...fetchMoreResult.repository.reviews,
                            edges: [
                                ...previousResult.repository.reviews.edges,
                                ...fetchMoreResult.repository.reviews.edges
                            ],
                            __typename: previousResult.repository.__typename,
                        }
                    }
                };

                //console.log('Pag data: ', nextResult);
                
                return nextResult;
            }
        })
    };

    //console.log('Repository: ', data);
    //const repository = data?.repository;

    return { 
        repository: data?.repository,       // incluye edges, pageInfo, totalCount, 
        fetchMoreReviews: handleFetchMore,
        loading, 
        error 
    };
};

export default useRepository;