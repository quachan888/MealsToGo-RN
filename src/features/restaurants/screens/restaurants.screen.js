import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { ActivityIndicator, Colors } from 'react-native-paper';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled.View`
    position: absolute;
    top: 30%;
    left: 50%;
`;

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            {isLoading && (
                <LoadingContainer>
                    <Loading animating={true} color={Colors.blue300} size={50} />
                </LoadingContainer>
            )}
            <FlatList
                data={restaurants}
                renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};
