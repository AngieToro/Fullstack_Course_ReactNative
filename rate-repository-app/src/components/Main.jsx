import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';
import Login from './Login';
import Logout from './Logout';
import useMe from '../hooks/useMe';

const Main = () => {

    const { data } = useMe();

    const Stack = createNativeStackNavigator();

    const isLoggedIn = !!data?.me;
  
    return (  
        <>
            <AppBar />
            <Stack.Navigator initialRouteName={ isLoggedIn ? "RepositoryList" : "Login"}>
              { isLoggedIn ? (
                <>
                  <Stack.Screen name='RepositoryList' component={RepositoryList} />
                  <Stack.Screen name='RepositoryDetails' component={RepositoryDetails}/>
                  <Stack.Screen name='Logout' component={Logout} />
                </>
              ) : (
                <Stack.Screen name='Login' component={Login} options={ { headerShown: false }} /> //para quitar la barra superior si ya usas tu propio AppBar.
              )}
            </Stack.Navigator>
        </>
    );
};

export default Main;