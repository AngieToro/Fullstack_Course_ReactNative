import React from 'react';
import { View, Text } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";

const RepositoryItemReview = ( { item } ) => {

    if ( !item ){
        return null;
    }

    console.log('Review item: ', item);   

    return (
        <Text>{item.text}</Text>
    );

};

export default RepositoryItemReview;