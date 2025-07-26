import React from "react";
import { Text as NativeText } from "react-native";
import stylesRepo from "../styles/RepositoryStyles";

const TextCustom = ( { color, fontSize, fontWeight, style, ...props } ) => {

    const textStyle = [

        stylesRepo.text,
        color === 'textSecondary' && stylesRepo.colorTextSecondary,
        color === 'primary' && stylesRepo.colorPrimary,
        fontSize === 'subheading' && stylesRepo.fontSizeSubheading,
        fontWeight === 'bold' && stylesRepo.fontWeightBold,
        style,
    ];

    return <NativeText style={ textStyle } { ...props } />;

};

export default TextCustom;