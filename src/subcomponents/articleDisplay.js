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
                  <div className="Screenreader-Only"> Here is a readout of this page's graph:</div>
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


class XAxisTick extends React.Component {
  render () {
    const {x, y, payload} = this.props;
		
   	return ( <foreignObject className="Graph-X-Axis-Foreign" x={x-40} y={y} width={75} height={30} >
    <div aria-hidden="true">
     <Text >{payload.value}</Text>
     </div>
     </foreignObject>
     )
    }
};


class YAxisTick extends React.Component {
  render () {
    const {x, y, payload} = this.props;
		
   	return ( <foreignObject className="Graph-Y-Axis-Foreign" x={x-23} y={y-8} width={24} height={20} >
    <div aria-hidden="true">
     <Text>{payload.value}</Text>
     </div>
     </foreignObject>
     )
    }
};

/*
If you put a custom tick in recharts with a foreign object in it, it seems that it does not have the same results as 
either settings for non-custom ticks, or a custom tick with just <text> and whatever width/height settings.
Thus, rather specific settings for these, at least for now.
*/


function chartMaker(graphInfo, graphNumber, props){
let graphData=graphInfo["data"]
let key=graphInfo["key"]
let title=graphInfo["title"]



const screenReaderBar = (inheritPass) => {
  console.log(JSON.stringify(inheritPass))
  const { x, y, width, height, value } = inheritPass;

  return (
    <foreignObject className="antipointer" x={x} y={y} width={width} height={height} >
    <button  aria-live="off" role="button" className="Screen-Reader-Button"  onClick={() => {props.dispatch(GraphClick(inheritPass, graphNumber))}} fill="#8884d8" >
    <div aria-hidden="true">{value}</div>
      <div className="Screenreader-Only" >Instructions</div>
      </button>
      </foreignObject>
  );
};

  const renderChart = (
    <ResponsiveContainer  width="99%" height={400}  >
    <BarChart data={graphData}  margin={{ bottom: 20 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0}    tick={<XAxisTick />} />    
      {/* Ideally the height would be defined via REM in css, but so far it seems that
      due to how recharts responsive container works, that may not be possible. 
      Display costs with this size setting are minimal, thankfully.*/}
    <YAxis width={30} tick={<YAxisTick />} />
          <Bar dataKey={key} fill="#8884d8"   label={screenReaderBar} cursor="pointer"
          onClick = {(Bar) => {
            props.dispatch(GraphClick(Bar, graphNumber))
            }}>
            </Bar>
        </BarChart>
        </ResponsiveContainer>
  );

  return (
    <div role="presentation">
    <div className="Graph-Title" aria-live="polite">{title}</div>
    <div className="Readout" aria-live="polite"></div>
    <div className="Graph-Overall">{renderChart}</div>
    </div>
  )
}
