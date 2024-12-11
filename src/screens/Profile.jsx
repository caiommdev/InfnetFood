import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import ColourPalet from "../AppColours/ColourPalete";
import { useTheme } from '../context/ThemeContext';
//import UserService from '../services/UserService';

export default function Profile() {
    const { theme } = useTheme();
    const username = "username";
    const email = "username@email.com";
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result.assets[0].uri);
        if (!result.cancelled) {
            setImage(result.assets[0].uri);
            await UserService.updateUser(email, { image: result.assets[0].uri });
        }
    };

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <Text style={[styles.title, theme === 'light' ? styles.lightText : styles.darkText]}>User Profile</Text>
            {image && <Image source={{ uri: image }} style={styles.profileImage} />}
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>Upload Photo</Text>
            </TouchableOpacity>
            <View style={styles.userInfo}>
                <Text style={[styles.infoText, theme === 'light' ? styles.lightText : styles.darkText]}>Username: {username}</Text>
                <Text style={[styles.infoText, theme === 'light' ? styles.lightText : styles.darkText]}>Email: {email}</Text>
            </View>
        </View>
    );
}

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lightText: {
        color: ColourPalet.text,
    },
    darkText: {
        color: ColourPalet.textSecondary,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    button: {
        backgroundColor: ColourPalet.highlight,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        width: '80%',
    },
    buttonText: {
        color: ColourPalet.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    userInfo: {
        marginTop: 20,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
    },
});