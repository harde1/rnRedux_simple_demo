'use strict';
import React, {Component} from 'react';
import  {  StyleSheet, Text, View } from 'react-native';

export default class SignIn extends Component {
  render() {
    const { actions } = this.props;

    return (
      <View style={styles.container}>
        <Text onPress={actions.routes.tabBar.tab1()}>Click me to Sign In</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
});
