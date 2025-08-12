import React from 'react';
import { FlatList } from "react-native";
import { render, within } from '@testing-library/react-native';
import RepositoryItem from '../../components/RepositoryItem';

export const RepositoryListContainer = ( { repositories }) => {

    const repositoriesNodes = repositories
        ? repositories.edges.map( (edge) => edge.node)
        : [];       

    return (

        <FlatList
            data={ repositoriesNodes }
            renderItem={ ( { item } ) => <RepositoryItem item={ item } /> }
            keyExtractor={ ( item ) => item.id }
            testID="repositoryList"
            initialNumToRender={repositoriesNodes.length} 
        />
    );
};

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {

        it ('render repository information correctly', () => {

            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const { getAllByTestId } = render(<RepositoryListContainer repositories={ repositories } />);

            const repositoryItems = getAllByTestId('repositoryItem');
            
            expect(repositoryItems).toHaveLength(2);

            const repo = within(repositoryItems[0]);
            expect(repo.getByText('jaredpalmer/formik')).toBeTruthy();
            expect(repo.getByText('Build forms in React, without the tears')).toBeTruthy();
            expect(repo.getByText('TypeScript')).toBeTruthy();
            expect(repo.getByText('1.6 k')).toBeTruthy();
            expect(repo.getByText('21.9 k')).toBeTruthy();
            expect(repo.getByText('88')).toBeTruthy();
            expect(repo.getByText('3')).toBeTruthy();
           
        });
    });
});