import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries';

const useRepositories = ( { orderDirection, orderBy, searchQuery, first} ) => {

    console.log('Orde direction: ', orderDirection);
    console.log('Order by; ', orderBy);

    const variables = {
        orderDirection,
        orderBy,
        searchKeyword: searchQuery,
        first
    };
    
    const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables
    });

    //paginacion 
    const handleFetchMore = () => {

        //Verifica que no esté cargando y que sí haya más datos (hasNextPage)
        const canFecthMore = !loading && data?.repositories?.pageInfo?.hasNextPage;

        if (!canFecthMore) return;
        
        //Llama a Apollo para pedir más datos con after: endCursor
        fetchMore({
            query: GET_REPOSITORIES,
            variables: {
                ...variables,
                after: data.repositories.pageInfo.endCursor
            },
            //Une los datos anteriores con los nuevos (edges.concat)
            updateQuery: ( previousResult, { fetchMoreResult }) => {

                if (!fetchMoreResult) return previousResult;

                const previousEdges = previousResult.repositories.edges;   //Son los repos ya cargados.
                const newEdges = fetchMoreResult.repositories.edges;        //descarta cualquier repo nuevo cuyo id ya exista en previousEdges.

                //filtrar duplicados 
                const mergeEdges = [
                    ...previousEdges,
                    ...newEdges.filer(
                        newEdges => !previousEdges.some( prevEdge => prevEdge.node.id === newEdges.node.id)
                    )
                ];

                const nextResult = {
                    repositories: {
                        ...fetchMoreResult.repositories,
                        edges: mergeEdges,
                        __typename: previousResult.repositories.__typename,
                    }
                };

                //console.log('Pag data: ', nextResult);
                
                return nextResult;
            }
        })
    };

    //const repositories = data?.repositories?.edges.map(edge => edge.node) || [];
    //console.log('Repositories: ', repositories);

    return { 
        repositories: data?.repositories,       // incluye edges, pageInfo, totalCount
        fetchMoreRepositories: handleFetchMore,
        loading, 
        error 
    };
};

export default useRepositories;