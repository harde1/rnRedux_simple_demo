/**
 * Created by cong on 16/6/29.
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import App from './containers/app';
const store = configureStore();
export default class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}