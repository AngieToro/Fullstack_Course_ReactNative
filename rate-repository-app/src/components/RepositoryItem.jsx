import { View, Text } from "react-native";
import styles from "../styles/RepositoryStyles";

const RepositoryItem = ( { item } ) => {

    return (

        <View style={ styles.item }>
            <Text style={ styles.name }> Name: { item.fullName } </Text>
            <Text> Description: { item.description } </Text>
            <Text> Language: { item.language} </Text>
            <Text> Forks: { item.forksCount } </Text>
            <Text> Stars: { item.stargazersCount } </Text>
            <Text> Rating: { item.ratingAverage } </Text>
            <Text> Review: { item.reviewCount }</Text>
        </View>
    );
};

export default RepositoryItem;