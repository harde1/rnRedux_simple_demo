/**
 * Created by cong on 16/6/29.
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {changeCountAction} from '../actions/changeCount';
import styles from '../styles';
class ChangeCount extends Component {
    componentWillReceiveProps() {
        console.log(
            "ChangeCount收到界面刷新的信息"
        );
    }

    //确定界面是否刷新
    shouldComponentUpdate(newprops) {
        let b = (this.props.newState.changeCount !== newprops.newState.changeCount);
        console.log(
           "========== ChangeCount  shouldComponentUpdate ==============="+b
        );
        return b;
    }
    render() {
        console.log(
            "========== ChangeCount ==============="
        );
        const {dispatch, newState,actions,assets} = this.props;
        const {changeCount} = newState;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                        dispatch(changeCountAction(changeCount.count+1));

                }}>
                    <Text style={[{padding:10,backgroundColor:'black',fontSize:18,color:'white'}]}>点击这里改变字体:{changeCount.count}</Text>
                </TouchableOpacity>

                <Text style={{padding:10,backgroundColor:'black',fontSize:18,color:'white'}} onPress={actions.routes.detail()}>Push detail view</Text>
                <TouchableOpacity onPress={actions.routes.detail()}>
                    <Image style={styles.image} source={assets.logo} />
                </TouchableOpacity>


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
export default connect(mapStateToProps)(ChangeCount);