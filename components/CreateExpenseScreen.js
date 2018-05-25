import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

class CreateExpenseScreen extends Component {
  
  static navigationOptions = {
    title: 'Create Expense',
  };

  state = {}
  render() {
    
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const expenseId = navigation.getParam('expenseId', null);
    const userId = navigation.getParam('userId', null);

    return (
      <View style={styles.container}>
        <Text style={styles.text}> Create Expense {`${expenseId} - ${userId}`} <Icon name="heart" /> </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('CreateExpense')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
    flex: 1,
  },
  text: {
    color: '#ffffff',
  }
})

export default CreateExpenseScreen;