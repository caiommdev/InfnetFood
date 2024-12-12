# InfnetFood

InfnetFood é um aplicativo de pedidos de comida desenvolvido com React Native e Expo. Este projeto permite que os usuários naveguem por diferentes categorias de alimentos, adicionem itens ao carrinho e façam pedidos.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/caiommdev/InfnetFood.git
cd infnetfood
```

2. Intale as dependencias
```
npm install
```

## Execucao
```
npx expo start
```

## Testes
```
npx jest
```
## Estrutura do Projeto
* App.js: Componente principal do aplicativo.
* src/: Diretório contendo os componentes, telas e outros arquivos do projeto.
  * components/: Componentes reutilizáveis do aplicativo.
  * screens/: Telas do aplicativo.
  * context/: Contextos do React para gerenciamento de estado.
  * data/: Dados mockados usados no aplicativo.
  * AppColours/: Paleta de cores usada no aplicativo.

## Dependências Principais
* react-native: Biblioteca principal para desenvolvimento mobile.
* expo: Framework e plataforma para desenvolvimento universal de aplicativos React.
* @react-navigation/native: Biblioteca de navegação para React Native.
* @testing-library/react-native: Biblioteca para testes de componentes React Native.
* jest: Framework de testes JavaScript.
