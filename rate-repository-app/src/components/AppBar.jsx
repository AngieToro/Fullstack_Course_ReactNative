import React from 'react';
import { View, Text as NativeText, ScrollView } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';
import AppBarTab from './AppBarTab';

const AppBar = () => {

    return (
        <View style={ stylesRepo.containerBar }>
            <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
                <AppBarTab to='/login' label='Login' />
                <AppBarTab to='/' label='Repositories' />
                <AppBarTab to='/' label='Test 1' />
                <AppBarTab to='/' label='Test 2' />
                <AppBarTab to='/' label='Test 3' />
                <AppBarTab to='/' label='Test 4' />
                <AppBarTab to='/' label='Test 5' />
                <AppBarTab to='/' label='Test 6' />
            </ScrollView>
        </View>
    );
};

export default AppBar;