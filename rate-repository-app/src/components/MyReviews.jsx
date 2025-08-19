import React from 'react';
import { Text, View, FlatList} from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';
import useMyReviews from '../hooks/useMe';
import RepositoryReviewDetails from './RepositoryReviewDetails';
import { ItemSeparator } from "../utils/utils";

const MyReviews = () => {

    const { data, loading, error, refetch } = useMyReviews( true );

    const reviews = data?.me?.reviews.edges?.map( edge => edge.node ) || []

    //console.log('reviews: ', reviews);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;
    if ( !reviews || reviews.length === 0 ) return <Text>No reviews found</Text>;

    return (
            <View style={ stylesRepo.item }>
                <FlatList
                    data= { reviews }
                    renderItem={ ( { item } ) => <RepositoryReviewDetails 
                        item={ item } 
                        repository={true}
                        refetch={refetch}
                    /> }
                    keyExtractor={ ( item ) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                    ListEmptyComponent={<Text>No reviews yet.</Text>}
                    ListFooterComponent={loading ? <Text>Loading more reviews...</Text> : null }
                />
            </View>
    )
};

export default MyReviews;