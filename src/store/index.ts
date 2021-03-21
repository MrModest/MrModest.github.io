import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(promise)));

export default store;