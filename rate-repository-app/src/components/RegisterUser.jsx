import React from "react";
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesRepo from "../styles/RepositoryStyles";
import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import { ValidationUserSchema } from '../utils/ValidationSchema';
import useCreateUser from '../hooks/useCreateUser';

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
};

const RegisterUser = () => {

    const { handleCreateUser, result } = useCreateUser();
    const navigation = useNavigation();

    const onSubmit = async( values ) => {

        console.log('Values to create user: ', values);
        const { username, password } = values;

        try {


            
            const { data } = await handleCreateUser( { username, password } );
            console.log('User: ', data);

            navigation.navigate('Login');

        } catch (error) {
            console.log('Error creating the review: ', error);
        }
    }; 


    return (
        <View style={ stylesRepo.contentContainer }>
            { result?.error && (
                <Text style={{ color: 'red', marginTop: 10 }}>
                    { result.error.message}
                </Text>
            )} 
            <Formik 
                initialValues={ initialValues } 
                onSubmit={ onSubmit } 
                validationSchema={ ValidationUserSchema }
            >
                { ( { handleSubmit } ) => (
                    <View style={ stylesRepo.listContainer }> 
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                             <Text style={ stylesRepo.name }>Username: </Text>
                             <Text style={ { color: '#ff0019ff'}}>*</Text>
                        </View>
                        <FormikTextInput name="username" placeholder="Username" style={stylesRepo.inputField}/>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                             <Text style={ stylesRepo.name }>Password: </Text>
                             <Text style={ { color: '#ff0019ff' }}>*</Text>
                        </View>
                        <FormikTextInput name="password" placeholder="Password " style={stylesRepo.inputField}/>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                            <Text style={ stylesRepo.name }>Confirm password: </Text>
                            <Text style={ { color: '#ff0019ff' }}>*</Text>
                        </View>
                        <FormikTextInput name="passwordConfirm" placeholder="Password" style={stylesRepo.inputField}/>
                        <Pressable style={ stylesRepo.button } onPress={ handleSubmit }>
                            <Text style={ stylesRepo.buttonText }>Create</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );

};

export default RegisterUser;