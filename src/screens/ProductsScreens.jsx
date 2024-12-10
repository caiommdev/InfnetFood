import React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import { productsRelationship } from '../data/products';

function ProductsScreen() {
    const route = useRoute();
    const { type } = route.params;

    const filteredProducts = productsRelationship.filter(product => product.type === type);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Text style={styles.productName}>{item.product.name}</Text>
                        <Text style={styles.productPrice}>R$ {item.product.price.toFixed(2)}</Text>
                        <Text style={styles.productDescription}>{item.product.description}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.product.name}
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
    productDescription: {
        fontSize: 14,
        color: '#666',
    },
});

export default ProductsScreen;