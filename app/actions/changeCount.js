/**
 * Created by cong on 16/6/29.
 * @flow
 */
import * as types from '../constants/ActionTypes';

export function changeCountAction(count) {
    return dispatch => {
        dispatch(changeSomthing(types.ACTON_CHANGE_COUNT,count));
    }
}

//点击这里detailAction的时候,把前一个界面的数据也改变了
export function detailAction(count) {
    return dispatch => {
      
        dispatch(changeSomthing(types.ACTON_DETAIL_CHANGE_COUNT,count));
    }
}

function changeSomthing(type,change) {
    return {
        type,
        change
    }
}