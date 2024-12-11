import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourPalet from '../AppColours/ColourPalete';
import { useTheme } from '../context/ThemeContext';

const RestaurantDetailsScreen = ({ route }) => {
    const { restaurant } = route.params;
    const { theme } = useTheme();

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <Text style={[styles.name, theme === 'light' ? styles.lightText : styles.darkText]}>{restaurant.name}</Text>
            <Text style={[styles.address, theme === 'light' ? styles.lightText : styles.darkText]}>{restaurant.address}</Text>
            <Text style={[styles.menuItem, theme === 'light' ? styles.lightText : styles.darkText]}>Exemplo de item do cardápio: {restaurant.menuItem}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    lightContainer: {
        backgroundColor: ColourPalet.primary,
    },
    darkContainer: {
        backgroundColor: ColourPalet.text,
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
    },
    lightText: {
        color: ColourPalet.text,
    },
    darkText: {
        color: ColourPalet.textSecondary,
    },
});

export default RestaurantDetailsScreen;