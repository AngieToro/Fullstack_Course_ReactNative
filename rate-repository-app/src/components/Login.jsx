import React from "react";
import { View, Text } from 'react-native';
import stylesRepo from "../styles/RepositoryStyles";
//import { Text } from "./TextCustom";

const Login = () => {
    return (
        <View style={ stylesRepo.contentContainer }>
            <Text style={ stylesRepo.title }>Login</Text>
        </View>
    );
};

export default Login;