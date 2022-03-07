import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard />
                <RestaurantInfoCard />
            </View>
        </SafeAreaView>
    );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight },
    search: { padding: 16 },
    list: { flexGrow: 1, padding: 16, backgroundColor: 'orange' }
});
