import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';
import Login from './Login';
import Logout from './Logout';
import useMe from '../hooks/useMe';
import ReviewCreate from './ReviewCreate';
import RegisterUser from './RegisterUser';
import MyReviews from './MyReviews';

const Stack = createNativeStackNavigator();

const AppStack = () => {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Repository List' component={RepositoryList} />
      <Stack.Screen name='Repository Details' component={RepositoryDetails}/>
      <Stack.Screen name='Create a Review' component={ReviewCreate}/>
      <Stack.Screen name='My Reviews' component={MyReviews}/>
      <Stack.Screen name='Logout' component={Logout} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {

  return (

    <Stack.Navigator screenOptions={ { headerShown:false }}> 
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={RegisterUser}/>
    </Stack.Navigator>
  );
};

const Main = () => {

    const { data, loading } = useMe();
    const isLoggedIn = !!data?.me;

    if (loading) return null;
  
    return (  
        <SafeAreaView style={{ flex: 1, backgroundColor: '#24292e'  }}> 
            <AppBar />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
              { isLoggedIn ? <AppStack key='app'/> : <AuthStack key='auth'/> }
            </View>
        </SafeAreaView>
    );
};

export default Main;