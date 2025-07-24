import React from 'react';
import { Text, Alert, Pressable } from 'react-native';

const TouchableText = ( ) => {

    return (
      <Pressable onPress= { () => Alert.alert('You clicked me')}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Click me</Text>
      </Pressable>
    );
};

export default TouchableText;