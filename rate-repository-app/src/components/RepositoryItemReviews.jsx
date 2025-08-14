import React from 'react';
import { View, Text, FlatList } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';
import RepositoryItemReview from './RepositoryItemReview';

const ItemSeparator = () => <View style={ stylesRepo.separator } />;

const RepositoryItemReviews = ( { reviews } ) => {
    
    const reviewsNode = reviews?.edges?.map( edge => edge.node) || [];
    console.log('Reviews: ', reviewsNode);   

    return(
        <View>
            <FlatList
                data= { reviewsNode }
                renderItem={ ( { item } ) => <RepositoryItemReview item={ item } /> }
                keyExtractor={ ( item ) => item.id }
                ItemSeparatorComponent={ ItemSeparator }
                ListEmptyComponent={<Text>No reviews yet.</Text>}
            />
        </View>

    ); 
};

export default RepositoryItemReviews;