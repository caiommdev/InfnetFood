import React from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { productsRelationship } from '../data/products';
import Product from '../components/Product';

function ProductsScreen({ navigation, cart, setCart }) {
    const route = useRoute();
    const { type } = route.params;

    const filteredProducts = productsRelationship.filter(product => product.type === type);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        Alert.alert('Produto adicionado ao carrinho');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <Product product={item.product} onAddToCart={handleAddToCart} />
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
});

export default ProductsScreen;