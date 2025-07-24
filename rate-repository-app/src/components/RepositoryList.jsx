import React from 'react';
import { Text, StyleSheet, View, FlatList} from 'react-native';
import repositories from '../../data/repositories';
import RepositoryItem from '../components/RepositoryItem';
import styles from '../styles/RepositoryStyles';

const ItemSeparator = () => <View style={ styles.separator } />;

const RepositoryList = () => {

    return(
        <View style={{ padding: 16 }}> 
            <Text style={ styles.bold }>Repositories</Text>
            <FlatList
                data={ repositories }
                renderItem={ ( { item } ) => <RepositoryItem item={ item } /> }
                keyExtractor={ ( item ) => item.id }
                ItemSeparator={ ItemSeparator }
            />
        </View>
    );
};

export default RepositoryList;