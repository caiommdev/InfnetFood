import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const restaurants = [
    { id: 1, name: "Bar do Adão", lat: -22.9068, lng: -43.1729, address: "Rua A, 123", menuItem: "Pastel de Camarão" },
    { id: 2, name: "Garota de Ipanema", lat: -22.9078, lng: -43.1739, address: "Rua B, 456", menuItem: "Feijoada Completa" },
    { id: 3, name: "Confeitaria Colombo", lat: -22.9088, lng: -43.1749, address: "Rua C, 789", menuItem: "Bolo de Chocolate" },
    { id: 4, name: "Churrascaria Palace", lat: -22.9098, lng: -43.1759, address: "Rua D, 101", menuItem: "Picanha na Brasa" },
    { id: 5, name: "Restaurante Yorubá", lat: -22.9108, lng: -43.1769, address: "Rua E, 112", menuItem: "Moqueca de Peixe" },
    { id: 6, name: "Pizzaria Guanabara", lat: -22.9118, lng: -43.1779, address: "Rua F, 131", menuItem: "Pizza Margherita" },
    { id: 7, name: "Acarajé da Bahia", lat: -22.9128, lng: -43.1789, address: "Rua G, 415", menuItem: "Acarajé Completo" },
    { id: 8, name: "Bar Urca", lat: -22.9138, lng: -43.1799, address: "Rua H, 161", menuItem: "Bolinho de Bacalhau" },
    { id: 9, name: "Sushi Leblon", lat: -22.9148, lng: -43.1809, address: "Rua I, 718", menuItem: "Combo 30 Peças" },
    { id: 10, name: "Cervejaria Lapa", lat: -22.9158, lng: -43.1819, address: "Rua J, 192", menuItem: "Chopp e Petiscos" },
];

const Map = () => {
    const navigation = useNavigation();

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -22.9068,
                longitude: -43.1729,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            {restaurants.map(restaurant => (
                <Marker
                    key={restaurant.id}
                    coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }}
                    title={restaurant.name}
                >
                    <Callout onPress={() => navigation.navigate('Restaurant', { restaurant })}>
                        <View>
                            <Text style={styles.name}>{restaurant.name}</Text>
                            <Text>{restaurant.address}</Text>
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    name: {
        fontWeight: 'bold',
    },
});

export default Map;
