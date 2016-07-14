/**
 * Created by cong on 16/6/29.
 * @flow
 */

'use strict';
import {combineReducers} from 'redux';
import newState from './changeSomething';
import { reducer as router } from 'react-native-router-redux';
const rootReducer = combineReducers({
    newState,
    router
});
export default rootReducer;