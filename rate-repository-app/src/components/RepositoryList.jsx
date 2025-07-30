import React from 'react';
import { Text as NativeText, View, FlatList} from 'react-native';
import repositories from '../../data/repositories';
import RepositoryItem from '../components/RepositoryItem';
import stylesRepo from '../styles/RepositoryStyles';

const ItemSeparator = () => <View style={ stylesRepo.separator } />;

const RepositoryList = () => { 

    //console.log('Repositories ', repositories);

    return(
        <View style={ stylesRepo.contentContainer }>
            <NativeText style={ stylesRepo.title }>Rate Repository Application</NativeText>
            <View style={ stylesRepo.listContainer }> 
                <FlatList
                    data={ repositories }
                    renderItem={ ( { item } ) => <RepositoryItem item={ item } /> }
                    keyExtractor={ ( item ) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                />
            </View>
         </View>
    );
};

export default RepositoryList;