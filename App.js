import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CreateExpenseScreen from './components/CreateExpenseScreen';
import ModalScreen from './ModalScreen';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    CreateExpense: CreateExpenseScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

class App extends Component {
  render() {
    return <RootStack />
  }
}

export default App;