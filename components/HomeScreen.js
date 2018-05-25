import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

class HomeScreen extends Component {
  
  state = {}
  
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      header: null,
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Expenses App <Icon name="heart" />
        </Text>
        <Button title="Create Expense" onPress={() => this.props.navigation.navigate('CreateExpense', {expenseId: 1, userId: 1})} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})

export default HomeScreen;