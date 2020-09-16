import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "./Actions";
import { mainContentFrame } from "./subcomponents/contentSelection";
import { navBar } from "./subcomponents/navSection";



class TopComponent extends React.Component {

  renderNav(){
    return(
      <div>{navBar(this.props)}</div>
    )
  }

  renderContent() {
    return(
      <div>{mainContentFrame(this.props)}</div>
    )
  }



  render() {
    return (
      <div className="Overall-Parent">
      <div>{this.renderNav()}</div>
      <div aria-live="polite">{this.renderContent()}</div>
    </div>

  );
}
}


function mapStateToProps(state) {
  return {
    section: state.section,
    transition: state.transition,
    articleList: state.articleList,
    currentArticle: state.currentArticle,
    graphList: state.graphList,
    formList: state.formList,
    HTMLList: state.HTMLList,
    currentGraphs: state.currentGraphs
  };
}



export default connect(mapStateToProps)(TopComponent);