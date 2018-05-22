import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

class CreateExpenseScreen extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Create Expense <Icon name="heart" /> </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
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