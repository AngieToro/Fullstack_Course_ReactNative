import React from "react";
import * as yup from 'yup';

const ValidationSchema = yup.object().shape ({
    username: yup
        .string()
        .min(4, 'Username must be 4 characters minimum')
        .required('Username is required'),
    password: yup
        .string()
        .min(3, 'Password must be 3 characteres minimum')
        .required('Password is required')
});

export default ValidationSchema;