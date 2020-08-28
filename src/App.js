import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "./Actions";
import { mainContentFrame } from "./subcomponents/topSection";



class TopComponent extends React.Component {

  renderTop() {
    return(
      <div>{mainContentFrame(this.props)}</div>
    )
  }



  render() {
    return (
      <div className="Overall-Grid-Parent">
      <div>{this.renderTop()}</div>
    </div>

  );
}
}


function mapStateToProps(state) {
  return {
    section: state.section,
    transition: state.transition
  };
}



export default connect(mapStateToProps)(TopComponent);