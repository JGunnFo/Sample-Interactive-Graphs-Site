import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Text, LabelList, Customized } from 'recharts';


  
export  function sectionArticle(props){
    return(
      <div className="Article-Parent">
          <div>{ReadArticleData(props)}</div>
      </div>
    );
  }
  
    


  function ReadArticleData(props){
    let contents=props.currentArticle
    let graphNumberOverall=-1
    return(
      <div>
      {contents.map((section,index) =>{
            if (section[0]==="H"){
              return(
                <div className="Article-HTML-Segment" key={index}>{props.HTMLList[section]}</div>
              )
            }
            if (section[0]==="G"){
              graphNumberOverall+=1
              let graphNumber=graphNumberOverall
              return(
                <div key={index}>
                  <div className="Screenreader-Only">There is a graph on this page. Here is a readout of the graph's data:</div>
                  {chartMaker(props.graphList[props.currentGraphs[graphNumber][0]], graphNumber, props)}
                  <div className="Revert-Graph-Parent"><button className="Revert-Graph" onClick={() => {props.dispatch(ChartOrigin(graphNumber))}}>Revert Graph</button></div>
                  </div>
              )
            }
          })}
        </div>
    )

  }
  /*
  graphList is where we get the graph data itself.
  currentGraphs is a list of what graphs the current article is rendering, and what it rendered at first
  before the graph was navigated.
  so currentGraphs[#][0] is what is currently displayed for that graph, and [#][1] is what it first showed.

  There's no big reasons for it to be this way,
  but basically the data for articles is ordered like HTML1, Graph1, HTML2, Graph2
  so that the order of rendering is implicit in the data-
  and i decided i'd like it ab it more if currentGraph kept the reference for what the original graph it was right there-
  rather htan, say, "OK, go to articleData[3] because that corresponds to our graph's origin".

  There may be a cleaner way to store these things while retaining order, making references a bit easier,
  keeping article data in its own place, and keeping all graph data in one place,
  but for now, leaving it this awy
  ^eh, dont want another "leaving it htis way" comment, but not for myself at least that those are hte concenrs
  */


class CustomizedAxisTick extends React.Component {
  render () {
    const {x, y, payload} = this.props;
		
   	return ( <foreignObject className="Graph-X-Axis-Foreign" x={x-40} y={y} width={75} height={30} textAnchor="middle"   verticalAnchor="start">
    <div aria-hidden="true">
     <Text>{payload.value}</Text>
     </div>
     </foreignObject>
     )
    }
};


function chartMaker(graphInfo, graphNumber, props){
let graphData=graphInfo["data"]
let key=graphInfo["key"]
let title=graphInfo["title"]



const customFunction = (inheritPass) => {
  console.log(JSON.stringify(inheritPass))
  const { x, y, width, height, value } = inheritPass;

  return (
    <foreignObject  x={x} y={y} width="50" height="50" role="img" alt="im reading this">
    <button role="button" alt="yes im reading"  onClick={() => {props.dispatch(GraphClick(inheritPass, graphNumber))}} fill="#8884d8" >
    <div>both</div>
    <div aria-hidden="true">non-sr</div>
      <div className="Screenreader-Only">Instructions</div>
      </button>
      </foreignObject>
  );
};

  const renderChart = (
    <ResponsiveContainer  width="99%" height={400}  >
    <BarChart data={graphData}  >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0}  tick={<CustomizedAxisTick />} height={50} />    
      {/* Ideally the height would be defined via REM in css, but so far it seems that
      due to how recharts responsive container works, that may not be possible. 
      Display costs with this size setting are minimal, thankfully.*/}
    <YAxis width={30} />
          <Tooltip  />
          <Bar dataKey={key} fill="#8884d8"   label={customFunction}
          onClick = {(Bar) => {
            props.dispatch(GraphClick(Bar, graphNumber))
            }}>
              <LabelList/>
            </Bar>
        </BarChart>
        </ResponsiveContainer>
  );

  return (
    <div role="presentation">
    <div className="Graph-Title">{title}</div>
    <div className="Graph-Overall">{renderChart}</div>
    </div>
  )
}
