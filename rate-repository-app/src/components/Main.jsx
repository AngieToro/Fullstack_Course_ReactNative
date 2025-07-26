import React, { useState } from 'react';
import { View, Text as NativeText, SafeAreaView, Pressable, ScrollView } from 'react-native';
import PressableClickMe from './PressableClickMe';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import stylesRepo from '../styles/RepositoryStyles';
import CustomStyles from './CustomStyles';
import FlexboxStyles from './FlexboxStyles';

const Main = () => {

  const [showExtraContent, setShowExtraContent] = useState(false);

   const handleClick = () => setShowExtraContent(true);
  
    return (

      <SafeAreaView style={ stylesRepo.containerApp }>
          <AppBar />
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={ stylesRepo.container }>
              <NativeText style={ stylesRepo.title }>Rate Repository Application</NativeText>
              <PressableClickMe />
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
              )}

              <RepositoryList />
            </View>
          </ScrollView>
      </SafeAreaView>
    );
};

export default Main;