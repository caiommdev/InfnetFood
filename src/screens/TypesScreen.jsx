import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import ColourPalet from '../AppColours/ColourPalete';

function TypesScreen({ route }) {
    const { types } = route.params || { types: [] };
    const { theme } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <FlatList
                data={types}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('Products', { type: item.name })}
                    >
                        <Text style={styles.buttonText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightContainer: {
        backgroundColor: ColourPalet.primary,
    },
    darkContainer: {
        backgroundColor: ColourPalet.text,
    },
    button: {
        backgroundColor: ColourPalet.highlight,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: ColourPalet.textSecondary,
        fontSize: 16,
    },
});

export default TypesScreen;