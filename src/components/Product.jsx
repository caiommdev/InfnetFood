import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Product({ product, onAddToCart }) {
    return (
        <View style={styles.productContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => onAddToCart(product)} />
        </View>
    );
}

const styles = StyleSheet.create({
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

export default Product;