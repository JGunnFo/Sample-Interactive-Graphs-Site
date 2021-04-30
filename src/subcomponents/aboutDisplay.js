import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";


  
export function SectionAbout({props}){
    return(
      <div className="Article-HTML-Segment">
        <div>This is a demonstratory fake business website made by Jeffrey Gunn, a React Redux web developer.</div>
        <div>I'll be adding more to this site over time. More details on the site are on the <a href="https://github.com/JGunnFo/sampleBiz" aria-label="Github Link">github page.</a></div>
        <div>I'll also be updating my github and my <a href="https://jeffrey-gunn.com" aria-label="Home Site Link">home page</a> with new projects and revised projects.</div>
        <div><a href="mailto:jeffgunnweb@gmail.com?subject=Edit this subject line to avoid the filter for bots." aria-label="Mail Jeffrey Gunn">Contact me</a> if you're looking for web developers, especially React and/or Redux ones.</div>
      </div>
    );
  }

  /*
  Sharing article style with about style for now.
  */ 
  
    