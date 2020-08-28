import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";

export function mainContentFrame(props){
    return(
      <div>{selectContent(props)}</div>  
    );
  }
  

  function selectContent(props){

    if (props.section==="main"){
      return( 
        <div role="main">{sectionMain(props)}</div>
     )
      }
      

    if (props.section==="news"){
      return( 
        <div role="main">{sectionNews(props)}</div>
     )
      }

    if (props.section==="article"){
      return( 
        <div role="main">{sectionArticle(props)}</div>
     )
      }
  
   
  }

/*
could simplify with useselector or something..
*/

  function sectionMain(props){
    return(
      <div className="Main-Flex-Parent">
          <div>example text 1 {props.section}</div>
          <div>example text 2</div>
      </div>
    );
  }
  
    
  function sectionNews(props){
    return(
      <div className="Main-Flex-Parent">
          <div>example text 1 {props.section}</div>
          <div>example text 2</div>
      </div>
    );
  }
  
    
  function sectionArticle(props){
    return(
      <div className="Main-Flex-Parent">
          <div>example text 1 {props.section}</div>
          <div>example text 2</div>
      </div>
    );
  }
  
    