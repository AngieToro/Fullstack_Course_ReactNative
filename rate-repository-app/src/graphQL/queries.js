import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String){
        repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, first: $first, after: $after) {
            totalCount
            pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
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
    query getCurrentUser($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
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
                        repository {
                            id
                            fullName
                            url
                        }
                    }
                }
            }
        }
    }`;

export const GET_REPOSITORY = gql`
    query Repository($repositoryId: ID!, $first: Int, $after: String) {
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
            reviews (first: $first, after: $after) {
                totalCount
                pageInfo {
                    startCursor
                    hasPreviousPage
                    hasNextPage
                    endCursor
                }
                edges {
                    cursor
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
    }`;