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
    draft.currentGraphs=[]

    
    {action.payload.map(section =>{
    if (section[0]==="G"){
      draft.currentGraphs.push([section, section])
    }})}
    /* section, section because its a list of lists, each [0] is current and each [1] is origin 
    */

    draft.currentArticle=action.payload;
    draft.section="Article";
    console.log(JSON.stringify(draft.currentGraphs))
    return draft;


    /*
    make sure the HTML1,Graph1, etc list and the currentGraphs are *lists* [] 
    and not objects {} so that order is preserved
    */

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
