import React from 'react';
import { Text as NativeText, View, FlatList} from 'react-native';
//import repositories from '../../data/repositories';
import RepositoryItem from './RepositoryItem';
import stylesRepo from '../styles/RepositoryStyles';
import useRepositories from '../hooks/useRepositoriesWithFechAPI';
import { ItemSeparator } from "../utils/utils";


const RepositoryList = () => { 

    //console.log('Repositories ', repositories);
    const { repositories } = useRepositories();

    const repositoryNodes = repositories
        ? repositories.edges.map( edge => edge.node)
        : [];

    return(
        <View style={ stylesRepo.contentContainer }>
            <NativeText style={ stylesRepo.title }>Rate Repository Application</NativeText>
            <View style={ stylesRepo.listContainer }> 
                <FlatList
                    // data={ repositories }
                    data= { repositoryNodes }
                    renderItem={ ( { item } ) => <RepositoryItem item={ item } /> }
                    keyExtractor={ ( item ) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                    ListEmptyComponent={
                        <NativeText style={ { textAlign:'center', marginTop:20 } }>
                            No repositories avaialable
                        </NativeText>
                    }
                />
            </View>
         </View>
    );
};

export default RepositoryList;