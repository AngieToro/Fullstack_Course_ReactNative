import React, { useState } from 'react';
import { Text as NativeText, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import Login from './Login';
import stylesRepo from '../styles/RepositoryStyles';
import PressableClickMe from './Customs/PressableClickMe';
import CustomStyles from './Customs/CustomStyles';
import FlexboxStyles from './Customs/FlexboxStyles';

const Main = () => {

  /* const [showExtraContent, setShowExtraContent] = useState(false);

  const handleClick = () => setShowExtraContent(true); */
  
    return (

      <SafeAreaView style={ stylesRepo.containerApp }>
          <AppBar />
          <Routes>
            <Route path='*' element={ <Navigate to='/' replace /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/' element={ <RepositoryList /> } />
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