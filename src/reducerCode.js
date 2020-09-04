import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopComponent from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import produce from "immer";
import {initialStateReducer} from './premade data/baselineState';
import {movieNameGraphPairs} from './premade data/articles';



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

  let result="h"
  console.log("WE GOT SOMETHIN??")
  console.log(barName)
  movieNameGraphPairs.map(pair =>{
    console.log(JSON.stringify(pair))
    console.log("CHECKING FOR PAIR...")
    if (barName===pair[0]){
      console.log("WE GOT A PAIR")
      console.log(pair[1])
      console.log("vs")
      console.log("GraphMovie_Byrnadel_August")
      return(pair[1]);
    }
    return;
  })
  return;
    
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

    case "GOTO":
      console.log("GOTO IS BEING RUN")
      console.log(JSON.stringify(JSON.stringify(draft.Section)))
      console.log(JSON.stringify(draft.currentArticle))
      console.log(JSON.stringify(draft.currentGraphs))
      draft.section=action.payload;
      return draft;      

    /*
   draft.currentGraphs[action.payload[1]] simply is the number passed by the graph function's
   dispatch, which indicates which chart slot is being used. The [0] after indicates the 
   currently shown chart there, while [1] would be the origin chart that the article defaults to
   for that slot.
   So in each below, we check what the name of the current chart that was clicked on was,
   then we change that chart slot based on which bar was clicked and what the graph was.
    */



    case "GRAPHCLICK":
      console.log("GRAPHCLICK IS BEING RUN")
      console.log(draft.currentGraphs[action.payload[1]][0].slice(0,10))

      if (draft.currentGraphs[action.payload[1]][0]==="GraphArranged_Genres_August" || draft.currentGraphs[action.payload[1]][0].slice(0,9)==="GraphDate" ){
        draft.currentGraphs[action.payload[1]][0]=GenreClicked(action.payload[0]["name"])
        console.log(draft.currentGraphs[action.payload[1]][0])
        return draft;

      }else if (draft.currentGraphs[action.payload[1]][0].slice(0,10)==="GraphGenre"){
        draft.currentGraphs[action.payload[1]][0]=MovieClicked(action.payload[0]["name"])
        console.log(draft.currentGraphs[action.payload[1]][0])
        return draft;

      } else if (draft.currentGraphs[action.payload[1]][0].slice(0,10)==="GraphMovie"){
        draft.currentGraphs[action.payload[1]][0]=WeekClicked(action.payload[0]["name"])
        console.log(draft.currentGraphs[action.payload[1]][0])
        return draft;
        
      } else {
        return draft;
      }



    case "ARTICLECLICK":
    console.log("ARTICLECLICK IS BEING RUN")
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
      console.log("CHARTORIGIN IS BEING RUN")
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
