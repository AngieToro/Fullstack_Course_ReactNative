import React from 'react';
import { View, Text as NativeText, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import stylesRepo from "../styles/RepositoryStyles";
import { formatCount, formatDateTime } from '../utils/validations';

const RepositoryItem = ( { item } ) => {

    const navigation = useNavigation();

    if ( !item ){
        return null;
    }

    const handlePress = () => {     

        navigation.navigate('Repository Details', {
            id: item.id
        } );
    };

    return (

         // testID se agrego por la prueba -> Fullstack_Course_ReactNative/rate-repository-app/src/__tests__/components/RepositoryList.test.js
        <Pressable onPress={ handlePress } testID="repositoryItem">
            <View style={ stylesRepo.item } >
                <View style={ { flexDirection: "row", marginBottom: 10 } }>
                    <Image
                        style={ stylesRepo.logo }
                        source={ { uri: item.ownerAvatarUrl } }
                    />
                    <View style={ { flexDirection: "column", flex: 1, marginLeft: 10 } }>
                        <NativeText style={ stylesRepo.name }> { item.fullName } </NativeText>
                        <NativeText> { item.description } </NativeText>
                        <NativeText>{formatDateTime(item.createdAt)}</NativeText>
                        <NativeText style={ stylesRepo.highlight }> { item.language} </NativeText>
                    </View>
                </View>
                <View style={ { flexDirection: "row", justifyContent: "space-around" } }>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { formatCount(item.stargazersCount) } </NativeText>
                        <NativeText> Stars </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } } > { formatCount(item.forksCount) } </NativeText>
                        <NativeText> Forks </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { item.ratingAverage } </NativeText>
                        <NativeText> Reviews </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { item.reviewCount }</NativeText>
                        <NativeText> Rating </NativeText>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default RepositoryItem;