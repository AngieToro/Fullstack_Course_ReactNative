import React from 'react';
import { View, Text as NativeText } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';

const AppBar = () => {

    return (
        <View style={ stylesRepo.containerBar }>
            {/* <PressableClickMe /> */}
            <NativeText style={stylesRepo.textBar}>Repositories</NativeText>
        </View>
    );
};

export default AppBar;