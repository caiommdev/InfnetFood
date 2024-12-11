import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../context/ThemeContext';
import ColourPalet from '../AppColours/ColourPalete';

import { productsRelationship } from '../data/products';
import Product from '../components/Product';

function ProductsScreen({ navigation, cart, setCart }) {
    const route = useRoute();
    const { type } = route.params;
    const [animationVisible, setAnimationVisible] = useState(false);
    const { theme } = useTheme();

    const filteredProducts = productsRelationship.filter(product => product.type === type);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setAnimationVisible(true);
        setTimeout(() => {
            setAnimationVisible(false);
        }, 1500);
    };

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <Product product={item.product} onAddToCart={handleAddToCart} />
                )}
                keyExtractor={(item) => item.product.name}
            />
            <Modal
                visible={animationVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require('../../assets/animations/add-to-cart.json')}
                        autoPlay
                        loop={false}
                        style={styles.animation}
                    />
                </View>
            </Modal>
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
    animationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    animation: {
        width: 150,
        height: 150,
    },
});

export default ProductsScreen;