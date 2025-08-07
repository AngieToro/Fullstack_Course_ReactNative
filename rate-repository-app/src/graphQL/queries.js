import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    id
                    name
                    fullName
                    ownerName
                    description    
                    language
                    forksCount
                    ratingAverage
                    reviewCount
                    stargazersCount
                    ownerAvatarUrl
                }
            }
        }
    }
`;

export const GET_USER_CONNECT = gql`
    query {
        me {
            id
            username
        }
    }
`;