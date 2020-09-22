import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopComponent from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import produce from "immer";
import {initialStateReducer} from './premade data/baselineState';
import {movieNameGraphPairs} from './premade data/articles';
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "./Actions";



/*
Currently, the data is based off an imported file rather than a database. 
This will be shifted to a database in the future once additional features 
and structures are committed to which will more strictly determine the shape 
of the data and reducer logic.  For the first version, I opted for creating 
the data quickly and not ending up overcommitted to a structure, especially 
since longterm specialization will define needs more. 

Questions like "Which complexities are stored in the reducer, 
and which in the data?" depends on undetermined specifics, 
so I avoided committing for now.
*/



function GenreClicked(barName){
  if (barName==="Horror"){
    return "GraphGenre_Horror_August";
  }
  if (barName==="Action"){
    return "GraphGenre_Action_August";
  }
  if (barName==="Drama"){
    return "GraphGenre_Drama_August";
  }
  if (barName==="Romance"){
    return "GraphGenre_Romance_August";
  }
  if (barName==="Comedy"){
    return "GraphGenre_Comedy_August";
  }
}

function MovieClicked(barName){
  return movieNameGraphPairs[barName];
}

function WeekClicked(barName){
  if (barName==="Week 1"){
    return "GraphDate_Week1_August";
  }
  if (barName==="Week 2"){
    return "GraphDate_Week2_August";
  }
  if (barName==="Week 3"){
    return "GraphDate_Week3_August";
  }
  if (barName==="Week 4"){
    return "GraphDate_Week4_August";
  }

}



export const reducer = produce((draft=initialStateReducer, action) => {
  switch (action.type) {

    case GOTO:
      draft.section=action.payload;
      return draft;      






    


    case GRAPHCLICK:

      /*
      For each graph displayed, there are a pair of graph strings.
      The former is the graph data currently being displayed, and the latter is the
      graph data that the graph first displays when the article is first clicked,
      since the data being displayed can change via interaciton.

      action.payload[1] simply is the number passed by the graph function's
      dispatch, which indicates which chart slot is being used. 

      This takes the graph number provided by the dispatch and uses it to check the
      correct slot, and then based on the graph in that slot, and based on the
      bar that was clicked on, it changes the graph to the next appropriate data, 
      such as going from
      "Here's a bunch of horror movies" 
      to clicking on a specific horror movie to change the graph to 
      "Here is this horror movie's sales by week."
      */

      if (draft.currentGraphs[action.payload[1]][0]==="GraphArranged_Genres_August" || draft.currentGraphs[action.payload[1]][0].slice(0,9)==="GraphDate" ){
        draft.currentGraphs[action.payload[1]][0]=GenreClicked(action.payload[0]["name"])
        return draft;

      }else if (draft.currentGraphs[action.payload[1]][0].slice(0,10)==="GraphGenre"){
        draft.currentGraphs[action.payload[1]][0]=MovieClicked(action.payload[0]["name"])
        return draft;

      } else if (draft.currentGraphs[action.payload[1]][0].slice(0,10)==="GraphMovie"){
        draft.currentGraphs[action.payload[1]][0]=WeekClicked(action.payload[0]["name"])
        return draft;
        
      } else {
        return draft;
      }



    case ARTICLECLICK:
    draft.currentGraphs=[]

    
    {action.payload.map(section =>{
    if (section[0]==="G"){
      draft.currentGraphs.push([section, section])
    }})}
    /* section, section because its a list of lists, each [0] is current and each [1] is origin 
    */

    draft.currentArticle=action.payload;
    draft.section="Article";
    return draft;



    case CHARTORIGIN:
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
