import { View, Text as NativeText, Image } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";

const RepositoryItem = ( { item } ) => {

    const formatCount = (value) => {
        return value >= 1000 
            ? `${(value / 1000).toFixed(1)} k` 
            : value;
    };

    if ( !item ){
        return null;
    }

    return (

        // testID se agrego por la prueba -> Fullstack_Course_ReactNative/rate-repository-app/src/__tests__/components/RepositoryList.js
        <View style={ stylesRepo.item } testID="repositoryItem" >
            <View style={ { flexDirection: "row", marginBottom: 10 } }>
                <Image
                    style={ stylesRepo.logo }
                    source={ { uri: item.ownerAvatarUrl } }
                />
                <View style={ { flexDirection: "column", flex: 1, marginLeft: 10 } }>
                    <NativeText style={ stylesRepo.name }> { item.fullName } </NativeText>
                    <NativeText> { item.description } </NativeText>
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
    );
};

export default RepositoryItem;