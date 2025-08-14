import React from 'react';
import { View, Text, FlatList } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';
import RepositoryReviewDetails from './RepositoryReviewDetails';

const ItemSeparator = () => <View style={ stylesRepo.separator } />;

const RepositoryItemReviews = ( { reviews } ) => {
    
    const reviewsNode = reviews?.edges?.map( edge => edge.node) || [];
    //console.log('Reviews: ', reviewsNode);   

    return(
        <View style={ stylesRepo.item }>
            <FlatList
                data= { reviewsNode }
                renderItem={ ( { item } ) => <RepositoryReviewDetails item={ item } /> }
                keyExtractor={ ( item ) => item.id }
                ItemSeparatorComponent={ ItemSeparator }
                ListEmptyComponent={<Text>No reviews yet.</Text>}
            />
        </View>

    ); 
};

export default RepositoryItemReviews;