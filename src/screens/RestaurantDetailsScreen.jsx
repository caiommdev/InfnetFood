import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantDetailsScreen = ({ route }) => {
    const { restaurant } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.address}>{restaurant.address}</Text>
            <Text style={styles.menuItem}>Exemplo de item do cardápio: {restaurant.menuItem}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    address: {
        fontSize: 18,
        marginBottom: 10,
    },
    menuItem: {
        fontSize: 16,
        color: '#666',
    },
});

export default RestaurantDetailsScreen;