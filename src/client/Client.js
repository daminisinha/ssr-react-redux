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
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';
import deserialize from 'serialize-javascript'
export const store = createStore(reducers,deserialize(window.INITIAL_STATE),applyMiddleware(thunk))
ReactDOM.hydrate(
    <Provider store={store}>
    <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
    </Provider>
    ,document.querySelector('#root'))