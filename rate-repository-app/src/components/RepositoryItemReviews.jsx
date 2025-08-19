import React from 'react';
import { View, Text, FlatList } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';
import RepositoryReviewDetails from './RepositoryReviewDetails';
import { ItemSeparator } from "../utils/utils";

const RepositoryItemReviews = ( { reviews, onEndReached, loading } ) => {
    
    const reviewsNode = reviews?.edges?.map( edge => edge.node) || [];
    //console.log('Reviews: ', reviewsNode);   

    return(
        <View style={ stylesRepo.item }>
            {onEndReached && (
                <FlatList
                    data= { reviewsNode }
                    renderItem={ ( { item } ) => <RepositoryReviewDetails item={ item } /> }
                    keyExtractor={ ( item ) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                    ListEmptyComponent={<Text>No reviews yet.</Text>}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.5} //Se dispara cuando el usuario está a la mitad del largo visible antes del final (Cargar justo antes del final)
                    ListFooterComponent={loading && <Text>Loading more reviews...</Text>}
                />
            )}
        </View>
    ); 
};

export default RepositoryItemReviews;