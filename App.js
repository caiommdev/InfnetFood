import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import TypesScreen from './src/screens/TypesScreen';
import ProductsScreen from './src/screens/ProductsScreens';
import CartScreen from './src/screens/CartScreen';
import Profile from './src/screens/Profile';
import Orders from './src/screens/Orders';
import MapScreen from './src/screens/MapScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Header from './src/components/Header';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

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
  const [orderList, setOrderList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login with mock data
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <ThemeProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <AppStack.Navigator
            screenOptions={{
              headerRight: () => <Header cart={cart} />,
              headerStyle:{backgroundColor: ColourPalet.secondary},
              headerTintColor: ColourPalet.text
            }}
          >
            <AppStack.Screen name="Types" initialParams={{ types }}>
              {props => <TypesScreen {...props} cart={cart} setCart={setCart} />}
            </AppStack.Screen>
            <AppStack.Screen name="Products">
              {props => <ProductsScreen {...props} cart={cart} setCart={setCart} />}
            </AppStack.Screen>
            <AppStack.Screen name="Cart">
              {props => <CartScreen {...props} cart={cart} setOrderList={setOrderList} orderList={orderList} />}
            </AppStack.Screen>
            <AppStack.Screen name="Profile" component={Profile} />
            <AppStack.Screen name="Orders">
              {props => <Orders {...props} orderList={orderList} />}
            </AppStack.Screen>
            <AppStack.Screen name="Map" component={MapScreen} />
            <AppStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
            <AppStack.Screen name="Checkout" component={CheckoutScreen} />
            <AppStack.Screen name="Settings" component={SettingsScreen} />
          </AppStack.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={Home} />
            <AuthStack.Screen name="Login">
              {props => <Login {...props} handleLogin={handleLogin} />}
            </AuthStack.Screen>
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
