import React from "react";
import { View, Text, Pressable } from 'react-native';
import { useNavigate } from "react-router-native";
import stylesRepo from "../styles/RepositoryStyles";
import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import validationSchema from '../utils/ValidationSchema'; 
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    username: '',
    password: '',
};

const Login = () => {

    const { handleLogin, result } = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async( values ) => {

        console.log('Values to login: ', values);
        const { username, password } = values;

        try {
            
            const response = await handleLogin( { username, password } );
            console.log('Login: ', response?.data?.authenticate?.user);

            const accessToken = response?.data?.authenticate?.accessToken;

            if ( accessToken ) {
                navigate('/repositories');
            }
            
        } catch (error) {
            console.log('Error login: ', error);
        }
    };

    return (
        <View style={ stylesRepo.contentContainer }>
            <Text style={ stylesRepo.title }>Login</Text>
            { result?.error && (
                <Text style={{ color: 'red', marginTop: 10 }}>
                    { result.error.message}
                </Text>
            )}
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