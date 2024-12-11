import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TypesScreen from '../screens/TypesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '../context/ThemeContext';

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

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('TypesScreen', () => {
  it('deve exibir a lista de categorias corretamente', () => {
    const { getByText } = render(
      <NavigationContainer>
        <ThemeProvider>
          <TypesScreen route={{ params: { types } }} />
        </ThemeProvider>
      </NavigationContainer>
    );

    types.forEach(type => {
      expect(getByText(type.name)).toBeTruthy();
    });
  });

  it('deve navegar para a tela de produtos ao clicar em uma categoria', () => {
    const { getByText } = render(
      <NavigationContainer>
        <ThemeProvider>
          <TypesScreen route={{ params: { types } }} />
        </ThemeProvider>
      </NavigationContainer>
    );

    fireEvent.press(getByText('Lanches'));
    expect(mockNavigate).toHaveBeenCalledWith('Products', { type: 'Lanches' });
  });
});