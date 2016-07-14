'use strict';
import React, {Component} from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {changeCountAction,detailAction} from '../actions/changeCount';
 class Detail2 extends Component {
   componentWillReceiveProps() {
     console.log(
         "Detail收到界面刷新的信息"
     );
   }
  render() {
      console.log(
          "========== Detail2 ==============="
      );
    const { actions,newState,dispatch } = this.props;
    const {changeCount,detail} = newState;
    return (
      <View style={styles.container}>
        <Text onPress={actions.pop}>Go back!</Text>


        <Text style={[{margin:12}]} onPress={()=>{
     
            dispatch(detailAction(detail.count+1));
        }}>点击这里的值将会影响到前面的界面:{detail.count}</Text>



      
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

function mapStateToProps(state) {
  const {newState} = state;
  return {
    newState
  }
}
export default connect(mapStateToProps)(Detail2);
