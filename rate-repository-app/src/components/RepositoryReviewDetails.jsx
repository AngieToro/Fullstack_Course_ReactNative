import React from 'react';
import { View, Text } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";
import { formatDate } from "../utils/validations";

const RepositoryItemReview = ( { item } ) => {

    if ( !item ){
        return null;
    }

    //console.log('Review item: ', item);   

    return (
        <View style={ stylesRepo.reviewDetail }>
            <View style={ { flexDirection: "row", marginBottom: 10 } }>
                <View style={ stylesRepo.ratingStyle }>
                    <Text style={ stylesRepo.ratingText }>{item.rating}</Text>
                </View>
                <View style={ { flexDirection: "column", flex: 1, marginLeft: 10 } }>
                    <Text style={ stylesRepo.name }>{item.user.username}</Text>
                    <Text>{formatDate(item.createdAt)}</Text>
                    <View style={{ height: 8 }} />
                    <Text>{item.text}</Text>
                </View>
            </View>
        </View>
    );

};

export default RepositoryItemReview;