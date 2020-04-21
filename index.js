import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { createStore ,applyMiddleware ,compose} from "redux";
import { Provider } from "react-redux";
import reducer from './reducers/reducer'
import {connect} from 'react-redux'
import  App from './App'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk))) 
render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
