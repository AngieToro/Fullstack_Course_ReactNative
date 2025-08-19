import React,  { useState } from 'react';
import { Text as NativeText, View, FlatList} from 'react-native';
import { useDebounce } from 'use-debounce';
import RepositoryItem from '../components/RepositoryItem';
import stylesRepo from '../styles/RepositoryStyles';
import useRepositories from '../hooks/useRepositories';
import RepositoryListHeader from './RepositoryListHeader';
import { ItemSeparator } from "../utils/utils";

const RepositoryList = () => { 

    const [selectedOrder, setSelectedOrder] = useState('latestRepositories');
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 2000); // 2 seg
   
    let orderBy = 'CREATED_AT';
    let orderDirection = 'DESC';
    
    if ( selectedOrder === 'highestRatedRepositories') {
        orderBy = 'RATING_AVERAGE';
        orderDirection = 'DESC';
    } else if (selectedOrder ==='lowestRatedRepositories') {
        orderBy = 'RATING_AVERAGE';
        orderDirection = 'ASC';
    }

    const { repositories, fetchMoreRepositories, loading, error } = useRepositories( { orderDirection, orderBy, searchQuery: debouncedSearchQuery, first:5 } );

    if (loading) return <NativeText>Loading...</NativeText>;
    if (error) return <NativeText>Error: {error.message}</NativeText>;
    if ( !repositories || repositories.length === 0 ) return <NativeText>No repositories found</NativeText>;

    const handleFetchMore = () => {
        console.log('You have reached the end of the list');
        fetchMoreRepositories();
    };

    //console.log(repositories.edges.map(edge => edge.node.id));

    return(
        <View style={ stylesRepo.repositoriesContainer }>
            <NativeText style={ stylesRepo.title }>Repository List</NativeText>
            <View style={stylesRepo.listContainer}>
                <FlatList
                    data= { repositories.edges.map(edge => edge.node) }
                    renderItem={ ( { item } ) => <RepositoryItem item={ item } /> }
                    keyExtractor={ ( item ) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                    ListHeaderComponent={
                        <RepositoryListHeader
                            searchQuery = { searchQuery }
                            setSearchQuery={ setSearchQuery }
                            selectedOrder= { selectedOrder }
                            setSelectedOrder={ setSelectedOrder }
                        />
                    }
                    onEndReached={handleFetchMore}
                    onEndReachedThreshold={0.5} //Se dispara cuando el usuario está a la mitad del largo visible antes del final (Cargar justo antes del final)
                    ListFooterComponent={loading && <Text>Loading more repositories...</Text>}
                />
            </View>
         </View>
    );
};

export default RepositoryList;