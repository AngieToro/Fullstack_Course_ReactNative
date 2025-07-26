import React from 'react';
import { Text as NativeText, Alert, Pressable, View } from 'react-native';

const PressableClickMe = () => {
 
    return (
      <View>
       <Pressable onPress={() => Alert.alert('You pressed the text')}>
        <NativeText>Click me</NativeText>
      </Pressable>
      </View>
    );
};

export default PressableClickMe;