import React from 'react';
import { Text as NativeText, View, FlatList} from 'react-native';
import RepositoryItem from '../components/RepositoryItem';
import stylesRepo from '../styles/RepositoryStyles';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={ stylesRepo.separator } />;

const RepositoryList = () => { 

    const { repositories, loading, error } = useRepositories();

    if (loading) return <NativeText>Loading...</NativeText>;
    if (error) return <NativeText>Error: {error.message}</NativeText>;

    return(
        <View style={ stylesRepo.contentContainer }>
            <NativeText style={ stylesRepo.title }>Rate Repository Application</NativeText>
                <View style={stylesRepo.listContainer}>
                <FlatList
                    data= { repositories }
                    renderItem={ ( { item } ) => <RepositoryItem item={ item } /> }
                    keyExtractor={ ( item ) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                />
                </View>
         </View>
    );
};

export default RepositoryList;