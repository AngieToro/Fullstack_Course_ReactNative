import React from "react";
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesRepo from "../styles/RepositoryStyles";
import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import { ValidationReviewSchema } from '../utils/ValidationSchema'; 
import useCreateReview from "../hooks/useCreateReview";

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating:'',
    text:''
};

const ReviewCreate = () => {

    const { handleCreateReview, result } = useCreateReview();
    const navigation = useNavigation();

    const onSubmit = async( values ) => {

        console.log('Values to create review: ', values);
        const { ownerName, repositoryName, rating, text } = values;

        try {
            
            const { data } = await handleCreateReview( { ownerName, repositoryName, rating, text } );
            console.log('Review: ', data);

            const repoId = data?.createReview?.repository?.id;

            if ( repoId ){
                navigation.navigate('Repository Details', { id: repoId });
            }

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
                validationSchema={ ValidationReviewSchema }
            >
                { ( { handleSubmit } ) => (
                    <View style={ stylesRepo.listContainer }> 
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                             <Text style={ stylesRepo.name }>Repository owner name: </Text>
                             <Text style={ { color: '#ff0019ff'}}>*</Text>
                        </View>
                        <FormikTextInput name="ownerName" placeholder="Repository owner name" style={stylesRepo.inputField}/>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                             <Text style={ stylesRepo.name }>Repository name: </Text>
                             <Text style={ { color: '#ff0019ff'}}>*</Text>
                        </View>
                        <FormikTextInput name="repositoryName" placeholder="Repository name" style={stylesRepo.inputField}/>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                            <Text style={ stylesRepo.name }>Repository rating: </Text>
                            <Text style={ { color: '#ff0019ff' }}>*</Text>
                        </View>
                        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={stylesRepo.inputField}/>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                            <Text style={ stylesRepo.name }>Review: </Text>
                        </View>
                        <FormikTextInput name="text" placeholder="Review" style={ [ stylesRepo.inputField, { textAlignVertical: 'top' } ]}/>
                        <Pressable style={ stylesRepo.button } onPress={ handleSubmit }>
                            <Text style={ stylesRepo.buttonText }>Create</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default ReviewCreate;