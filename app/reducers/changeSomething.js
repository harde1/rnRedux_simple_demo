/**
 * Created by cong on 16/6/29.
 * @flow
 */
'use strict';
import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';
var {List,Map} = Immutable;
const initialState = {
    changeCount:{count: 0},//前一页界面的数据
    detail:{count:0}//后一页界面的数据
};
export default function changeCount(state = initialState, action) {
    switch (action.type) {

        case types.ACTON_CHANGE_COUNT:
            
            return Object.assign({}, state, {
                changeCount:{ count: action.change}
            });


        case types.ACTON_DETAIL_CHANGE_COUNT:

            return Object.assign({}, state, {
                detail:{ count: action.change}
            });
            break;
        default:
            return state;

    }
}