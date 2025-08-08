import React from 'react';
import { View, Text as NativeText, ScrollView } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';
import AppBarTab from './AppBarTab';
import useMe from '../hooks/useMe';

const AppBar = () => {

    const { data, loading } = useMe();

    const isLoggedIn = !!data?.me;
    console.log('User connected?', isLoggedIn);
    console.log('Loading: ', loading);

    return (
        <View style={ stylesRepo.containerBar }>
            <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
                { loading 
                    ? null
                    : ( isLoggedIn 
                        ? (
                            <>
                                <AppBarTab to='/repositories' label='Repositories' />
                                <AppBarTab to='/logout' label='Logout' />
                            </>
                        ) : (
                                <AppBarTab to='/login' label='Login' />
                            )
                        )
                }
                    {/* <AppBarTab to='/' label='Test 2' />
                    <AppBarTab to='/' label='Test 3' />
                    <AppBarTab to='/' label='Test 4' />
                    <AppBarTab to='/' label='Test 5' />
                    <AppBarTab to='/' label='Test 6' /> */}
            </ScrollView>
        </View>
    );
};

export default AppBar;