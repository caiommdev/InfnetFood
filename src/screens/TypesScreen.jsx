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
                contentContainerStyle={styles.listContent}
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
    listContent: {
        paddingVertical: 20,
    },
    button: {
        backgroundColor: ColourPalet.highlight,
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginVertical: 10,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: ColourPalet.textSecondary,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TypesScreen;