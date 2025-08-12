import React from "react";
import { Text, View } from "react-native";
import { render } from "@testing-library/react-native";

const Greeting = ( { name } ) => {
    return (
        <View>
            <Text testID="greetingText">Hello { name }</Text>
        </View>
    );
};

describe('Greeting', () => {

    it ('renders a greeting message based on the name prop', () => {

        const { debug, getByTestId } = render(<Greeting name='Kalle' />);

        //debug();    //devuelve las consultas y ayudantes adicionales. imprime el árbol React renderizado en un formato fácil de usar

        expect( getByTestId('greetingText')).toHaveTextContent('Hello Kalle');
        //toHaveTextContent se usa para afirmar que el contenido textual del nodo es correcto. 
    });
});
