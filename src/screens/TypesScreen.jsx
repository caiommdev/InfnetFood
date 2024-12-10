import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from "react-native";

function TypesScreen({ route, navigation }) {
    const { types } = route.params;
    return (
        <View style={styles.container}>
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
        backgroundColor: '#f5f5f5',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TypesScreen;