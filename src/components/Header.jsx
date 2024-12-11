import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ cart }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart })}>
                <Ionicons name="cart" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Ionicons name="map" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="settings" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 15,
    },
    icon: {
        marginLeft: 15,
    },
});

export default Header;