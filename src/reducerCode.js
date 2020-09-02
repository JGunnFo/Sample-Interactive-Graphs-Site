import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopComponent from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import produce from "immer";
import {initialStateReducer} from './premade data/baselineState';




export const reducer = produce((draft=initialStateReducer, action) => {
  switch (action.type) {

    case "GOTO":
      draft.section=action.payload;
      return draft;      

      default:
          return draft;
  }
})


export const store=createStore(reducer);

export const App = () => (
  <Provider store={store}>
    <TopComponent />
  </Provider>
);
