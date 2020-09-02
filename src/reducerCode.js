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

    case "GRAPHCLICK":
      if (draft.currentGraphs[action.payload[1]][0]==="Graph1"){
        draft.currentGraphs[action.payload[1]][0]="Graph2" 
        return draft;
      }
      if (draft.currentGraphs[action.payload[1]][0]==="Graph2"){
        draft.currentGraphs[action.payload[1]][0]="Graph1"
        return draft;
      }

    case "ARTICLECLICK":
    draft.currentArticle=action.payload;
    draft.section="Article";
    return draft;

    case "CHARTORIGIN":
    draft.currentGraphs[action.payload][0]=draft.currentGraphs[action.payload][1]
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
