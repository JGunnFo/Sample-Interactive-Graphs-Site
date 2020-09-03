import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";

    
export  function sectionNews(props){
    return(
      <div className="Main-Flex-Parent">
          <div>{LoopOverNews(props)}</div>
      </div>
    );
  }
  
  function LoopOverNews(props){
    return(
      <div>
        {props.articleList.map(preview =>
          (RenderSquares(preview, props))
          )}
      </div>
    )

  }
    
  function RenderSquares(passedPreview, props){
    return(
      <div>
      <div>{passedPreview["TitleText"]}</div>
      <div>{passedPreview["PreviewText"]}</div>
      <div>{passedPreview["Sections"]}</div>
      <div><button onClick={() => {props.dispatch(ArticleClick(passedPreview["Sections"]))}}>expandthisclickarea</button></div>
      </div>
    )
  }

