import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import TypesScreen from './src/screens/TypesScreen';
import ProductsScreen from './src/screens/ProductsScreens';


const AppStack = createStackNavigator();


const types = [{ name: "Lanches" },{ name: "Japones" },{ name: "Sobremesas" },{ name: "Bebidas"}, 
  { name: "Massas"}, { name: "Saladas"},{ name: "Carnes" },{ name: "Vegetariano"}, { name: "Vegano"}];


export default function App() {
  return (
    <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Types" component={TypesScreen} initialParams={{types}}/>
            <AppStack.Screen name="Products" component={ProductsScreen} />
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
