import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CreateExpenseScreen from './components/CreateExpenseScreen';

const RootComponent = createStackNavigator(
  { Home: HomeScreen,
    CreateExpense: CreateExpenseScreen
  },
  { initialRouteName: 'Home' }
);

class App extends Component {
  render() {
    return <RootComponent />
  }
}

export default App;