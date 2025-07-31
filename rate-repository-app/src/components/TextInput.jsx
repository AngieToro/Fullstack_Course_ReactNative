import React from "react";
import { TextInput as NativeTextInput } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";

const TextInput = ( { style, error, ...props } ) => {

    const textInputStyle = [ 
        style,                              //estilo como parametro
        stylesRepo.textInput,               //estilo base 
        error && stylesRepo.errorBorder     //si da error se coloca el estilo
    ];

    return (
        <NativeTextInput style={ textInputStyle } { ...props } />
    );
};

export default TextInput;