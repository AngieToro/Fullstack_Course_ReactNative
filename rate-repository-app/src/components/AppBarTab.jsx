import React from 'react';
import { Text , Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesRepo from '../styles/RepositoryStyles';

const AppBarTab = ( { to, label } ) => {

    const navigation = useNavigation();

    return (
        <View>
            <Pressable onPress={() => navigation.navigate(to)}>
                <Text style={ stylesRepo.textBar }> { label } </Text>
            </Pressable>
        </View>
    );
};

export default AppBarTab;