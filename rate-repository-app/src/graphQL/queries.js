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

export const GET_REPOSITORY = gql`
    query Repository($repositoryId: ID!) {
        repository(id: $repositoryId) {
            id
            ownerName
            name
            createdAt
            fullName
            ratingAverage
            reviewCount
            stargazersCount
            watchersCount
            forksCount
            openIssuesCount
            url
            ownerAvatarUrl
            description
            language
            reviews {
                edges {
                    node {
                        id
                        createdAt
                        rating
                        text
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;