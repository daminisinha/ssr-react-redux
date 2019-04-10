//Start up point
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//create store and applying middlewares
import {createStore, applyMiddleware} from 'redux';
//manage asyc calls
import thunk from 'redux-thunk';
//provide store to connecting components
import {Provider} from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

export const store = createStore(reducers,{},applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    </Provider>
    ,document.querySelector('#root'))