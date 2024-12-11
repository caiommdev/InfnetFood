import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import ColourPalet from '../AppColours/ColourPalete';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>Tema Escuro</Text>
            <Switch
                trackColor={{ false: ColourPalet.terciary, true: ColourPalet.highlight }}
                thumbColor={theme === 'dark' ? ColourPalet.secondary : ColourPalet.primary}
                ios_backgroundColor={ColourPalet.terciary}
                onValueChange={toggleTheme}
                value={theme === 'dark'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    lightContainer: {
        backgroundColor: ColourPalet.primary,
    },
    darkContainer: {
        backgroundColor: ColourPalet.text,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    lightText: {
        color: ColourPalet.text,
    },
    darkText: {
        color: ColourPalet.textSecondary,
    },
});

export default SettingsScreen;