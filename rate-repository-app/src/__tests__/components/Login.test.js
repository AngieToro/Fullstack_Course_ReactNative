import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Pressable, Text, TextInput, View} from 'react-native'; 
import ValidationSchema from '../../utils/ValidationSchema';

const Login = ( { onSubmit } ) => {

    const initialValues = { username: '', password: ''};

    return(

        <Formik
            initialValues={ initialValues}
            validationSchema={ ValidationSchema }
            onSubmit={ onSubmit}
        >
             { ( { handleSubmit, values, handleChange, touched, errors } ) => (
            <View>
                <TextInput
                    value={values.username}
                    onChangeText={ handleChange('username')}
                    testID="Username"
                />
                {touched.username && errors.username 
                    ? (
                        <Text testID='username-error'>{errors.username}</Text>
                    )
                    : null
                }
                <TextInput
                    value={values.password}
                    onChangeText={ handleChange('password')}
                    testID="Password"
                />
                {touched.password && errors.password 
                    ? (
                        <Text testID='password-error'>{errors.password}</Text>
                    )
                    : null
                }
                <Pressable onPress={handleSubmit} testID="submit-button">
                    <Text>Submit</Text>
                </Pressable>
            </View>
            )}
        </Formik>
    );
};

describe('Login form', () => {

    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

        const handleSubmit = jest.fn();
        const { getByTestId } = render(<Login onSubmit={ handleSubmit } />);

        const usernameInput = getByTestId('Username');
        const passwordInput = getByTestId('Password');
        const submitButton = getByTestId('submit-button');
      
        fireEvent.changeText( usernameInput, 'kalle');
        fireEvent.changeText( passwordInput, 'password');
        fireEvent.press(submitButton);

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledTimes(1);
            expect(handleSubmit).toHaveBeenCalledWith({
                username: 'kalle',
                password: 'password'
            },
            expect.any(Object)
            );
        });
    });

     it('calls onSubmit function with empty arguments when a valid form is submitted', async () => {

        const handleSubmit = jest.fn();
        const { getByTestId, findByTestId } = render(<Login onSubmit={ handleSubmit } />);

        const usernameInput = findByTestId('username-error');
        const passwordInput = findByTestId('password-error');
        const submitButton = getByTestId('submit-button');

        fireEvent.press(submitButton);

        expect(await usernameInput).toBeTruthy();
        expect(await passwordInput).toBeTruthy();
        expect(handleSubmit).not.toHaveBeenCalled();

     });
});