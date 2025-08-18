import React,  { useState } from 'react';
import { Text as NativeText, View, FlatList} from 'react-native';
import { useDebounce } from 'use-debounce';
import RepositoryItem from '../components/RepositoryItem';
import stylesRepo from '../styles/RepositoryStyles';
import useRepositories from '../hooks/useRepositories';
import RepositoryListHeader from './RepositoryListHeader';

const ItemSeparator = () => <View style={ stylesRepo.separator } />;

const RepositoryList = () => { 

    const [selectedOrder, setSelectedOrder] = useState('latestRepositories');
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500); // 500ms de delay
   
    let orderBy = 'CREATED_AT';
    let orderDirection = 'DESC';
    
    if ( selectedOrder === 'highestRatedRepositories') {
        orderBy = 'RATING_AVERAGE';
        orderDirection = 'DESC';
    } else if (selectedOrder ==='lowestRatedRepositories') {
        orderBy = 'RATING_AVERAGE';
        orderDirection = 'ASC';
    }

    const { repositories, loading, error } = useRepositories( { orderDirection, orderBy, searchQuery: debouncedSearchQuery } );

    if (loading) return <NativeText>Loading...</NativeText>;
    if (error) return <NativeText>Error: {error.message}</NativeText>;
    if ( !repositories || repositories.length === 0 ) return <NativeText>No repositories found</NativeText>;

    return(
        <View style={ stylesRepo.repositoriesContainer }>
            <NativeText style={ stylesRepo.title }>Repository List</NativeText>
            <View style={stylesRepo.listContainer}>
                <FlatList
                    data= { repositories }
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
                />
            </View>
         </View>
    );
};

export default RepositoryList;