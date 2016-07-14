'use strict';
import React, {Component} from 'react';
import  {Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';
import {connect} from 'react-redux';
 class Master extends Component {
   componentWillReceiveProps() {
     console.log(
         "Master收到界面刷新的信息"
     );
   }
  render() {
      console.log(
          "========= Master ==========="
      );
    const { actions, assets } = this.props;

    return (
      <View style={[styles.container]}>
        <TouchableHighlight onPress={actions.routes.detail()}>
          <Image style={styles.image} source={assets.logo} />
        </TouchableHighlight>
        <Text style={styles.text} onPress={actions.routes.detail()}>Push detail view</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {newState} = state;
  return {
    newState
  }
}
export default connect(mapStateToProps)(Master);
