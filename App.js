import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import TypesScreen from './src/screens/TypesScreen';
import ProductsScreen from './src/screens/ProductsScreens';
import CartScreen from './src/screens/CartScreen';
import Profile from './src/screens/Profile';
import Header from './src/components/Header';

const AppStack = createStackNavigator();

const types = [
  { name: "Lanches" },
  { name: "Japones" },
  { name: "Sobremesas" },
  { name: "Bebidas" },
  { name: "Massas" },
  { name: "Saladas" },
  { name: "Carnes" },
  { name: "Vegetariano" },
  { name: "Vegano" }
];

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
        <AppStack.Navigator
            screenOptions={{
                headerRight: () => <Header cart={cart} />,
            }}
        >
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen 
                name="Types" 
                initialParams={{ types }} 
            >
                {props => <TypesScreen {...props} cart={cart} setCart={setCart} />}
            </AppStack.Screen>
            <AppStack.Screen 
                name="Products"
            >
                {props => <ProductsScreen {...props} cart={cart} setCart={setCart} />}
            </AppStack.Screen>
            <AppStack.Screen name="Cart">
                {props => <CartScreen {...props} cart={cart} />}
            </AppStack.Screen>
            <AppStack.Screen name="Profile" component={Profile} />
        </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});