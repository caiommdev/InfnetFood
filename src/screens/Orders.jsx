import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ColourPalet from '../AppColours/ColourPalete';

function Orders({ navigation, orderList }) {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <FlatList
                data={orderList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <View style={[styles.orderContainer, theme === 'light' ? styles.orderContainerLigth : styles.orderContainerDark]}>
                            <Text style={[styles.orderTitle, theme === 'light' ? styles.lightText : styles.darkText]}>Pedido #{item.id}</Text>
                            <Text style={[styles.orderDate, theme === 'light' ? styles.lightText : styles.darkText]}>{item.date}</Text>
                            <FlatList
                                data={item.items}
                                renderItem={({ item }) => (
                                    <View style={styles.productContainer}>
                                        <Text style={[styles.productName, theme === 'light' ? styles.lightText : styles.darkText]}>{item.name}</Text>
                                        <Text style={[styles.productPrice, theme === 'light' ? styles.lightText : styles.darkText]}>R$ {item.price.toFixed(2)}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.name}
                            />
                            <Text style={[styles.orderTotal, theme === 'light' ? styles.lightText : styles.darkText]}>Total: R$ {item.total.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

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
    orderContainerLigth: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    orderContainerDark: {
        backgroundColor: '#000',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    orderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    productContainerLigth: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    productContainerDark: {
        backgroundColor: '#000',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    productName: {
        fontSize: 16,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
    },
    orderTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    lightText: {
        color: ColourPalet.text,
    },
    darkText: {
        color: ColourPalet.textSecondary,
    },
});

export default Orders;