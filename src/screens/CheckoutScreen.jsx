import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import ColourPalet from '../AppColours/ColourPalete';
import { useTheme } from '../context/ThemeContext';

const CheckoutScreen = ({ navigation }) => {
    const { theme } = useTheme();
    const [selectedPaymentMethod, setselectedPaymentMethod] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [animationVisible, setAnimationVisible] = useState(false);

    const paymentMethods =[ 
            { key: 'Dinheiro', value: 'dinheiro' },
            { key: 'Crédito', value: 'credito' },
            { key: 'Débito', value: 'debito' },
            { key: 'Pix', value: 'pix' },
        ]

    const handleCheckout = () => {
        if (!selectedPaymentMethod || !street || !number || !neighborhood || !zipCode) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Mock data for order
        const order = {
            selectedPaymentMethod,
            address: {
                street,
                number,
                complement,
                neighborhood,
                zipCode,
            },
        };

        setAnimationVisible(true);
        setTimeout(() => {
            setAnimationVisible(false);
            navigation.navigate('Types');
        }, 1500);
    };

    return (
        <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>Forma de Pagamento</Text>
            <SelectList 
                data={paymentMethods} 
                setSelected={setselectedPaymentMethod }
                dropdownTextStyles={[theme === 'light' ? {color: ColourPalet.text} : {color: ColourPalet.textSecondary}]}/>

            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>Rua</Text>
            <TextInput
                style={[styles.input, theme === 'light' ? styles.lightInput : styles.darkInput]}
                value={street}
                onChangeText={setStreet}
            />

            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>Número</Text>
            <TextInput
                style={[styles.input, theme === 'light' ? styles.lightInput : styles.darkInput]}
                value={number}
                onChangeText={setNumber}
            />

            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>Complemento (opcional)</Text>
            <TextInput
                style={[styles.input, theme === 'light' ? styles.lightInput : styles.darkInput]}
                value={complement}
                onChangeText={setComplement}
            />

            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>Bairro</Text>
            <TextInput
                style={[styles.input, theme === 'light' ? styles.lightInput : styles.darkInput]}
                value={neighborhood}
                onChangeText={setNeighborhood}
            />

            <Text style={[styles.label, theme === 'light' ? styles.lightText : styles.darkText]}>CEP</Text>
            <TextInput
                style={[styles.input, theme === 'light' ? styles.lightInput : styles.darkInput]}
                value={zipCode}
                onChangeText={setZipCode}
            />

            <Button title="Finalizar Pedido" onPress={handleCheckout} />
            <Modal
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
            </Modal>
        </View>
    );
};

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
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    lightText: {
        color: ColourPalet.text,
    },
    darkText: {
        color: ColourPalet.textSecondary,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    lightInput: {
        borderColor: '#ccc',
        backgroundColor: ColourPalet.primary,
        color: ColourPalet.text,
    },
    darkInput: {
        borderColor: '#555',
        backgroundColor: ColourPalet.text,
        color: ColourPalet.textSecondary,
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

export default CheckoutScreen;