import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";
import { SectionNews } from "./newsDisplay.js";
import { SectionArticle } from "./articleDisplay.js";
import { SectionAbout } from "./aboutDisplay.js";

export function MainContentFrame({props}){
    return(
      <div>
        <SelectContent
        props={props}
        />
      </div>  
    );
  }
  

function SelectContent({props}){


    if (props.section==="News"){
      return( 
        <div role="main">
          <SectionNews
          props={props}
          />
        </div>
     )
      }

    if (props.section==="Article"){
      return( 
        <div role="main">
        <SectionArticle
        props={props}
        />
        </div>
     )
      }
  
   
    if (props.section==="About"){
      return( 
        <div role="main">
          <SectionAbout
          props={props}
          />
        </div>
     )
      }
  
     
  }

  


