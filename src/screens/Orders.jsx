import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function Orders({ navigation, orderList }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={orderList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <View style={styles.orderContainer}>
                            <Text style={styles.orderTitle}>Pedido #{item.id}</Text>
                            <Text style={styles.orderDate}>{item.date}</Text>
                            <FlatList
                                data={item.items}
                                renderItem={({ item }) => (
                                    <View style={styles.productContainer}>
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.name}
                            />
                            <Text style={styles.orderTotal}>Total: R$ {item.total.toFixed(2)}</Text>
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
        backgroundColor: '#f5f5f5',
    },
    orderContainer: {
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
    orderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    productContainer: {
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
});

export default Orders;