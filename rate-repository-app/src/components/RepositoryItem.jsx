import { View, Text as NativeText } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";

const RepositoryItem = ( { item } ) => {

    const formatCount = (value) => {
        return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
    };

    if ( !item ){
        return null;
    }

    return (

        <View style={ stylesRepo.item }>
            <NativeText style={ stylesRepo.name }> Name: { item.fullName } </NativeText>
            <NativeText> Description: { item.description } </NativeText>
            <NativeText> Language: { item.language} </NativeText>
            <NativeText> Forks: { formatCount(item.forksCount) } </NativeText>
            <NativeText> Stars: { formatCount(item.stargazersCount) } </NativeText>
            <NativeText> Rating: { item.ratingAverage } </NativeText>
            <NativeText> Review: { item.reviewCount }</NativeText>
        </View>
    );
};

export default RepositoryItem;