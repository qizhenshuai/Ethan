/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux';

import configureStore from './stores';

import App from './App';

const store = configureStore();

class Index extends Component{

    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }


};


AppRegistry.registerComponent('Ethan', () => Index);
