import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../context/ThemeContext';
import ColourPalet from '../AppColours/ColourPalete';

function CartScreen({ navigation, cart, setOrderList, orderList }) {
    const [animationVisible, setAnimationVisible] = useState(false);
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    const { theme } = useTheme();

    const handlePlaceOrder = () => {
        const order = {
            id: orderList.length + 1,
            items: cart,
            total: total,
            date: new Date().toLocaleString(),
        };

        setOrderList([...orderList, order]);
        setAnimationVisible(true);
        setTimeout(() => {
            setAnimationVisible(false);
            navigation.navigate('Orders');
        }, 1500);
    };

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <View style={[styles.productContainer, theme === 'light' ? styles.productContainerLight : styles.productContainerDark]}>
                        <Text style={[styles.productName, theme === 'light' ? styles.lightText : styles.darkText]}>{item.name}</Text>
                        <Text style={[styles.productPrice, theme === 'light' ? styles.lightText : styles.darkText]}>R$ {item.price.toFixed(2)}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />
            <TouchableOpacity onPress={handlePlaceOrder}>
                <View style={styles.totalContainer}>
                    <Text style={[styles.totalText, theme === 'light' ? styles.lightText : styles.darkText]}>Total: R$ {total.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
            {/* <Modal
                visible={animationVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require('../../assets/animations/order-confirmed.json')}
                        autoPlay
                        loop={false}
                        style={styles.animation}
                    />
                </View>
            </Modal> */}
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
    productContainerLight: {
        backgroundColor: '#fff', //#000'
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#000', //'#fff'
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    productContainerDark: {
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
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    totalContainerLigth: {
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
    totalContainerDark: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 5,
        shadowColor: '#fff',
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
    lightText: {
        color: ColourPalet.text,
    },
    darkText: {
        color: ColourPalet.textSecondary,
    },
});

export default CartScreen;