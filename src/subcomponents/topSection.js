import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";

export function mainContentFrame(props){
    return(
      <div>{selectContent(props.section)}</div>  
    );
  }
  

  function selectContent(mainProp){

      return( 
        <div role="main">{sectionMain(mainProp)}</div>
     )

  
   
  }

/*
could simplify with useselector or something..
*/

  function sectionMain(theProp){
    return(
      <div className="Main-Flex-Parent">
          <div>example text 1 {theProp}</div>
          <div>example text 2</div>
      </div>
    );
  }
  
    