import React from "react";
import * as yup from 'yup';

export const ValidationLoginSchema = yup.object().shape ({
    username: yup
        .string()
        .min(4, 'Username must be 4 characters minimum')
        .required('Username is required'),
    password: yup
        .string()
        .min(3, 'Password must be 3 characteres minimum')
        .required('Password is required')
});

export const ValidationReviewSchema = yup.object().shape ({
    ownerName: yup
        .string()
        .min(4, 'Username must be 4 characters minimum')
        .required('Repository owner is required'),
    repositoryName: yup
        .string()
        .min(4, 'Repository name must be 4 characteres minimum')
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0, 'Rating must be at least 0')
        .max(100, 'Rating cannot be more than 100')
        .required('Rating is required'),
    text: yup
        .string()
        .min(4, 'Text must be 4 characters minimum')
        .notRequired()
});

export const ValidationUserSchema = yup.object().shape ({
    username: yup
        .string()
        .min(1, 'Username must be 1 character minimum')
        .max(30, 'Username cannot be more than 30 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be 5 characteres minimum')
        .max(50, 'Password cannot be more than 50 characters')
        .required('Password is required'),
    passwordConfirm: yup
        .string()
        .min(5, 'Password must be 5 characteres minimum')
        .max(50, 'Password cannot be more than 50 characters')
        .oneOf([ yup.ref('password')], 'Password does not match')
        .required('Password is required'),
});