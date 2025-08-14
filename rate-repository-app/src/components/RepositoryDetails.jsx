import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text as NativeText, Image, Linking, Pressable } from 'react-native';
import useRepository  from '../hooks/useRepository';
import stylesRepo from "../styles/RepositoryStyles";
import { formatCount, formatDateTime } from '../utils/validations'; 
import RepositoryItemReviews from './RepositoryItemReviews';

const RepositoryDetails = () => {

    const route = useRoute();
    const { id } = route.params;

    console.log('Id repository: ', id);

    const { repository, loading, error } = useRepository(id);
    console.log('Repository: ', repository);

    if (loading) return <NativeText>Loading...</NativeText>;
    if (error) return <NativeText>Error: {error.message}</NativeText>;

    const handleURL = ( url ) => {

        console.log('Url: ', url);

        if ( !url ) return null;
    
        Linking
            .openURL(url)
            .catch( error => console.error('Unable to connect with GitHub', error) );
    };
    
    return(
        <View style={ stylesRepo.itemDetail } >
                <View style={ { flexDirection: "row", marginBottom: 10 } }>
                    <Image
                        style={ stylesRepo.logo }
                        source={ { uri: repository.ownerAvatarUrl } }
                    />
                    <View style={ { flexDirection: "column", flex: 1, marginLeft: 10 } }>
                        <NativeText style={ stylesRepo.name }> { repository.fullName } </NativeText>
                        <NativeText> { repository.description } </NativeText>
                        <NativeText> Creation date: { formatDateTime(repository.createdAt) } </NativeText>
                        <NativeText style={ stylesRepo.highlight }> { repository.language} </NativeText>
                    </View>
                </View>
                <View style={ { flexDirection: "row", justifyContent: "space-around" } }>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { formatCount(repository.stargazersCount) } </NativeText>
                        <NativeText> Stars </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } } > { formatCount(repository.forksCount) } </NativeText>
                        <NativeText> Forks </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { repository.ratingAverage } </NativeText>
                        <NativeText> Reviews </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { repository.reviewCount }</NativeText>
                        <NativeText> Rating </NativeText>
                    </View>
                    <View style={ stylesRepo.raking }>
                        <NativeText style={ { fontWeight: 'bold' } }> { repository.openIssuesCount }</NativeText>
                        <NativeText> Open Issues </NativeText>
                    </View>
                </View>
                <View style={ stylesRepo.button }>
                    <Pressable onPress={ () => handleURL(repository?.url )}>
                        <NativeText>Open GitHub</NativeText>
                    </Pressable>
                </View>
                <View>
                    <RepositoryItemReviews reviews={repository?.reviews}/>
                </View>
            </View>
    );    
};

export default RepositoryDetails;