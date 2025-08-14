import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesRepo from '../styles/RepositoryStyles';
import AppBarTab from './AppBarTab';
import useMe from '../hooks/useMe';

const AppBar = () => {

    const { data, loading } = useMe();
    const navigation = useNavigation();

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
                                <AppBarTab to='Repository List' label='Repositories' />
                                <AppBarTab to='Create a Review' label='Create a review' />
                                <AppBarTab to='Logout' label='Logout' />
                            </>
                        ) : (
                            <>
                                <AppBarTab to='Login' label='Login' />
                                <AppBarTab to='Register' label='Register'/>
                            </>
                            )
                        )
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;