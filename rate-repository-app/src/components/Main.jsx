import React, { useState } from 'react';
import { Text as NativeText, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import Login from './Login';
import Logout from './Logout';
import stylesRepo from '../styles/RepositoryStyles';
import PressableClickMe from './customs/PressableClickMe';
import CustomStyles from './customs/CustomStyles';
import FlexboxStyles from './customs/FlexboxStyles';

const Main = () => {

  /* const [showExtraContent, setShowExtraContent] = useState(false);

  const handleClick = () => setShowExtraContent(true); */
  
    return (

      <SafeAreaView style={ stylesRepo.containerApp }>
          <AppBar />
          <Routes>
            <Route path='*' element={ <Navigate to='/' replace /> } />
            <Route path='/' element={ <Login /> } />
            <Route path='/repositories' element={ <RepositoryList /> } />
            <Route path='/logout' element={ <Logout /> } />
          </Routes>
          {/*  <PressableClickMe />
              <Pressable onPress= { handleClick }>
                <NativeText style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  Click to show the content
                </NativeText>
              </Pressable>
              { showExtraContent && (
                <View style={{ marginTop: 20, paddingHorizontal:20 }}>
                  <CustomStyles />
                  <FlexboxStyles />
                </View> 
              )} */}
      </SafeAreaView>
    );
};

export default Main;