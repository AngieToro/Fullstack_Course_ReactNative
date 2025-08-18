import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String){
        repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
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
                    createdAt
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