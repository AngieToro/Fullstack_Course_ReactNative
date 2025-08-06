import React from "react";
import { View, Text, Pressable } from 'react-native';
import stylesRepo from "../styles/RepositoryStyles";
import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import validationSchema from '../utils/ValidationSchema'; 

const initialValues = {
    username: '',
    password: '',
};

const Login = () => {

    const onSubmit = ( values ) => {

        console.log('Values to login: ', values);
        
    };

    return (
        <View style={ stylesRepo.contentContainer }>
            <Text style={ stylesRepo.title }>Login</Text>
            <Formik 
                initialValues={ initialValues } 
                onSubmit={ onSubmit } 
                validationSchema={ validationSchema }
            >
                { ( { handleSubmit } ) => (
                    <View style={ stylesRepo.listContainer }> 
                        <FormikTextInput name="username" placeholder="Username"/>
                        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
                        <Pressable style={ stylesRepo.button } onPress={ handleSubmit }>
                            <Text style={ stylesRepo.buttonText }>Login</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default Login;