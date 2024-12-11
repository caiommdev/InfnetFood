import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SelectList } from 'react-native-dropdown-select-list';

const CheckoutScreen = ({ navigation }) => {
    const [selectedPaymentMethod, setselectedPaymentMethod] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [zipCode, setZipCode] = useState('');

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

        // Navigate to Orders screen
        navigation.navigate('Types');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Forma de Pagamento</Text>
            {/* <RNPickerSelect
                onValueChange={(value) => setPaymentMethod(value)}
                items={[
                    { label: 'Dinheiro', value: 'dinheiro' },
                    { label: 'Crédito', value: 'credito' },
                    { label: 'Débito', value: 'debito' },
                    { label: 'Pix', value: 'pix' },
                ]}
                style={pickerSelectStyles}
                placeholder={{ label: 'Selecione uma forma de pagamento', value: '' }}
            /> */}
            <SelectList data={paymentMethods} setSelected={setselectedPaymentMethod}/>

            <Text style={styles.label}>Rua</Text>
            <TextInput
                style={styles.input}
                value={street}
                onChangeText={setStreet}
            />

            <Text style={styles.label}>Número</Text>
            <TextInput
                style={styles.input}
                value={number}
                onChangeText={setNumber}
            />

            <Text style={styles.label}>Complemento (opcional)</Text>
            <TextInput
                style={styles.input}
                value={complement}
                onChangeText={setComplement}
            />

            <Text style={styles.label}>Bairro</Text>
            <TextInput
                style={styles.input}
                value={neighborhood}
                onChangeText={setNeighborhood}
            />

            <Text style={styles.label}>CEP</Text>
            <TextInput
                style={styles.input}
                value={zipCode}
                onChangeText={setZipCode}
            />

            <Button title="Finalizar Pedido" onPress={handleCheckout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    inputAndroid: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default CheckoutScreen;