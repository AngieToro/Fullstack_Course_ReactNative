import { gql } from '@apollo/client';

export const AUTHENTICATE_USER = gql`
    mutation Mutation($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            user {
                id,
                username
            }
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql `
    mutation Mutation($review: CreateReviewInput) {
        createReview(review: $review) {
            id
            createdAt
            text
            rating
                user {
                username
                id
            }
            repository {
                name
                id
            }
        }
    }
`;

export const CREATE_USER = gql `
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            id
            createdAt
            username
            reviewCount
        }
    }
`;

export const DELETE_REVIEW = gql `
    mutation Mutation($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }
`;