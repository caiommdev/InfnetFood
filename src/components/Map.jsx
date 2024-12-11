import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

// Mock data for restaurants
const restaurants = [
    { id: 1, name: "Restaurante A", lat: -22.9068, lng: -43.1729, address: "Rua A, 123" },
    { id: 2, name: "Restaurante B", lat: -22.9078, lng: -43.1739, address: "Rua B, 456" },
    { id: 3, name: "Restaurante C", lat: -22.9088, lng: -43.1749, address: "Rua C, 789" },
    { id: 4, name: "Restaurante D", lat: -22.9098, lng: -43.1759, address: "Rua D, 101" },
    { id: 5, name: "Restaurante E", lat: -22.9108, lng: -43.1769, address: "Rua E, 112" },
    { id: 6, name: "Restaurante F", lat: -22.9118, lng: -43.1779, address: "Rua F, 131" },
    { id: 7, name: "Restaurante G", lat: -22.9128, lng: -43.1789, address: "Rua G, 415" },
    { id: 8, name: "Restaurante H", lat: -22.9138, lng: -43.1799, address: "Rua H, 161" },
    { id: 9, name: "Restaurante I", lat: -22.9148, lng: -43.1809, address: "Rua I, 718" },
    { id: 10, name: "Restaurante J", lat: -22.9158, lng: -43.1819, address: "Rua J, 192" },
];

const Map = () => {
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
                    <Callout>
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