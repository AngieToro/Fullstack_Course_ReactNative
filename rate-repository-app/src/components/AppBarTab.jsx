import React from 'react';
import { Text , Pressable, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Link } from 'react-router-native';
import stylesRepo from '../styles/RepositoryStyles';

const AppBarTab = ( { to, label } ) => {

    const navigate = useNavigate();

    return (
        <View>
            {/* <Link to={ to } component={ Pressable } style={ stylesRepo.tab }>
                <Text style={ stylesRepo.textBar }> { label } </Text>
            </Link> */} 
            <Pressable onPress={() => navigate(to)}>
                <Text style={ stylesRepo.textBar }> { label } </Text>
            </Pressable>
        </View>
    );
};

export default AppBarTab;