import React from 'react';
import { View, Text, Linking, Pressable, Alert } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";
import { formatDate } from "../utils/validations";
import { handleURL } from "../utils/utils";
import useDeleteReview from "../hooks/useDeleteReview";

const RepositoryItemReview = ( { item, repository, refetch } ) => {

    //console.log('Review item: ', item);  

    const { deleteReview } = useDeleteReview();

    const handleDeleteReview = ( idReview ) => {
        
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: async () => {

                    try {
                        console.log('OK Pressed')
                        await deleteReview( idReview );
                        Alert.alert('Deleted','Review has been successfully removed');
                        refetch?.();
                        
                    } catch (error) {
                        console.error('Failed to delete review: ', error);
                    }
                }
            },
        ]);
    };

    if ( !item ) return null; 

    return (
        <View style={ stylesRepo.reviewDetail }>
            <View style={ { flexDirection: "row", marginBottom: 10 } }>
                <View style={ stylesRepo.ratingStyle }>
                    <Text style={ stylesRepo.ratingText }>{item.rating}</Text>
                </View>
                <View style={ { flexDirection: "column", flex: 1, marginLeft: 10 } }>
                    { repository 
                        ? ( <Text style={ stylesRepo.name }>{item.repository.fullName}</Text> )
                        : ( <Text style={ stylesRepo.name }>{item.user.username}</Text> )
                    }
                    <Text>{formatDate(item.createdAt)}</Text>
                    <View style={{ height: 8 }} />
                    <Text>{item.text}</Text>
                </View>
            </View>
            <View style={ { flexDirection: "row", marginBottom: 10 } }>
                { repository && (
                    <View style={ [ stylesRepo.button, { marginLeft: 25 } ] }>
                        <Pressable onPress={ () => handleURL(item.repository.url )}>
                            <Text style={ stylesRepo.buttonText }>View repository</Text>
                        </Pressable>
                    </View>
                )}
                <View style={ [ stylesRepo.buttonRed, { marginLeft: 25 } ] }>
                    <Pressable onPress={ () => handleDeleteReview( item.id )}>
                        <Text style={ stylesRepo.buttonText }>Delete review</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItemReview;