import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";
import { sectionNews } from "./newsDisplay.js";
import { sectionArticle } from "./articleDisplay.js";

export function mainContentFrame(props){
    return(
      <div>{selectContent(props)}</div>  
    );
  }
  

  function selectContent(props){


    if (props.section==="News"){
      return( 
        <div role="main">{sectionNews(props)}</div>
     )
      }

    if (props.section==="Article"){
      return( 
        <div role="main">{sectionArticle(props)}hey</div>
     )
      }
  
   
  }

  


