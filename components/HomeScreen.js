import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

class HomeScreen extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>
            Expenses App <Icon name="heart" />
          </Text>
          <Button title="Go to Details" onPress={() => this.props.navigation.navigate('CreateExpense')}
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

export default HomeScreen;