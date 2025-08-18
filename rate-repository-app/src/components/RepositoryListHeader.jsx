import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { Searchbar } from 'react-native-paper';
import stylesRepo from '../styles/RepositoryStyles';

const RepositoryListHeader = ( { searchQuery, setSearchQuery, selectedOrder, setSelectedOrder }) => {

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={ setSearchQuery }
                value={ searchQuery }
                style={{ margin: 16, borderRadius: 8 }}
                inputStyle={{ fontSize: 16 }}
            />
            <RNPickerSelect
                onValueChange={setSelectedOrder}
                value={selectedOrder}
                placeholder={{ label: 'Select an item...', value: null }}
                items={[
                    { label: 'Latest repositories', value: 'latestRepositories' },
                    { label: 'Highest rated repositories', value: 'highestRatedRepositories' },
                    { label: 'Lowest rated repositories', value: 'lowestRatedRepositories' },
                ]}
                Icon={ () => {
                    return <Ionicons name='chevron-down' size={20} color='gray'/>;
                }}
                style={ { 
                    inputIOS: stylesRepo.inputIOS,
                    placeholder: stylesRepo.placeholder, 
                    iconContainer: {
                        top: 12, 
                        right: 10,
                    },
                } }
            />
        </View>
    );
};

export default RepositoryListHeader;