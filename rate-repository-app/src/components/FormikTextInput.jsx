import React from "react";
import { View, Text } from "react-native";
import { useField } from 'formik';
import TextInput from "./TextInput";
import styleRepo from "../styles/RepositoryStyles";

const FormikTextInput = ( { name, ...props } ) => {

    //field es el input y tiene propiedades basicas name, value, onChange, onBlur
    //meta da la info del estado del input, si tiene errores, si fue tocado, etc
    //helpers da las funciones para asignar el valor del input y el accionar del boton 
    const [field, meta, helpers] = useField(name);

    // Check if the field is touched and the error message is present
    const showError = meta.touched && meta.error;

    return (
        <View>
            <TextInput
                onChangeText={ ( value ) => helpers.setValue( value ) }
                onBlur= { () => helpers.setTouched( true ) }
                value={ field.value }
                error={ showError }
                { ...props }
            />
            { showError && 
                <Text style={ styleRepo.erroText }> { meta.error }</Text>
            }
        </View>
    );
};

export default FormikTextInput;