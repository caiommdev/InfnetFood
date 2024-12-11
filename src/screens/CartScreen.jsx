import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function CartScreen({ navigation, cart, setOrderList, orderList }) {
    const total = cart.reduce((sum, product) => sum + product.price, 0);

    const handlePlaceOrder = () => {
        const order = {
            id: orderList.length + 1,
            items: cart,
            total: total,
            date: new Date().toLocaleString(),
        };

        setOrderList([...orderList, order]);
        navigation.navigate('Orders');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />
            <TouchableOpacity onPress={handlePlaceOrder}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    productContainer: {
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
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    totalContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CartScreen;