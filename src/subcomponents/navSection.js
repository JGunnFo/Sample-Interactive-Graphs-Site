import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";



export function navBar(props){
    return(
      <div>
      <div className="Nav-Flex-Parent" role="navigation">
      <div>{navBarButton("News", props)}</div>
      <div>{navBarButton("Article", props)}</div>
      <div>{navBarButton("About", props)}</div>
      <div>{navBarButton("Github", props)}</div>
      </div></div>
    );
  }


  function navBarButton(passTo, props){

    let navStyle
    if (props.section===passTo){
      navStyle="Nav-Selected"
    } else {
      navStyle=""
    }
 
    if (passTo==="Article"){
    if (props.currentArticle){
        return(
      <div className={navStyle}>
      <div><button className="Button-Unset" onClick={() => {props.dispatch(GoTo(passTo))}}>{passTo}</button></div>
      </div>
        )}
        else{
            return;
            /* remember this way of exiting returns undefined, if that matters */
        }
    }

    if (passTo==="Github"){
      return(
      <div>
      <a className="Nav-Link" href="https://github.com/JGunnFnnno?tab=repositories" aria-label="Github Link">Github</a>
      </div>
      )
    }

    return(
      <div className={navStyle}>
      <div><button className="Button-Unset" onClick={() => {props.dispatch(GoTo(passTo))}}>{passTo}</button></div>
      </div>
    );
  }
  
  
