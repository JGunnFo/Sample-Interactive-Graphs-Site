import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Text, LabelList, Customized } from 'recharts';


  
export function SectionArticle({props}){
    return(
      <div className="Article-Parent">
          <div>
            <ReadArticleData
            props={props}
            />
          </div>
      </div>
    );
  }
  
    


function ReadArticleData({props}){
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
                  <ChartMaker
                  graphInfo={props.graphList[props.currentGraphs[graphNumber][0]]}
                  graphNumber={graphNumber}
                  props={props}
                  />
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
  so currentGraphs[#][0] is what is currently displayed for that graph, and [#][1] is what it first showed, the "origin".

  There's no big reasons for it to be this way,
  but basically the data for articles is ordered like HTML1, Graph1, HTML2, Graph2
  so that the order of rendering is implicit in the data-
  and i decided it was convenient if currentGraph kept the reference for what the original graph it was right there-
  rather htan, say, "OK, go to articleData[3] because that corresponds to our graph's origin".

  There may be a cleaner way to store these things while retaining order, making references a bit easier,
  keeping article data in its own place, and keeping all graph data in one place, 
  but this way will suffice for now.
  */




function ChartMaker({graphInfo, graphNumber, props}){
let graphData=graphInfo["data"]
let key=graphInfo["key"]
let title=graphInfo["title"]



  const ScreenReaderButton = (currentBar) => {
    const { x, y, width, height, value, name } = currentBar;
  
    return (
      <foreignObject className="antipointer" x={x} y={y-18} width={width} height={height+15}>
      <button  aria-live="off" role="button" className="Screen-Reader-Button"  onClick={() => {props.dispatch(GraphClick(currentBar, graphNumber))}} fill="#8884d8" >
      <div aria-hidden="true">{value}</div>
        <div className="Screenreader-Only">{name}{key}:{value}Hit the enter button to receive more data about {name}{key}.</div>
        </button>
        </foreignObject>
    );
  };

  const renderChart = (
    <ResponsiveContainer  width="99%" height={400}  >
    <BarChart data={graphData} margin={{ bottom: 50, top: 20 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0}    tick={<XAxisTick />} />    
      {/* Ideally the height would be defined via REM in css, but so far it seems that
      due to how recharts responsive container works, that may not be possible. 
      Display costs with this size setting are minimal, thankfully.*/}
    <YAxis width={30} tick={<YAxisTick />} />
    <Tooltip />
          <Bar dataKey={key} fill="#8884d8"   label={ScreenReaderButton} cursor="pointer"
          onClick = {(Bar) => {
            props.dispatch(GraphClick(Bar, graphNumber))
            }}>
            </Bar>
        </BarChart>
        </ResponsiveContainer>
  );

  function ScreenReaderReadout({graphInfo}){
    let graphData=graphInfo["data"]
    let key=graphInfo["key"]

    let readout=[]
    for (let i=0; i < graphData.length; i++) {readout.push(RenderReadout(graphData[i], key, i))}
    
    return(
      <div><div>{readout}</div>
      You can receive a new set of data based on each of these. Navigate the site with your keyboard until you arrive on data you want to learn more about, then hit enter. That will generate a new set of data which will be read. For example, if the Graph is "August Movie Sales by Genre" and then you select "Action sales", you will receive data about individual action movies' sales in August.</div>
    )

  }



  function RenderReadout(passedPreview, key, index){
    return(
      <div key={index}>
        <div>{passedPreview["name"]}  {key}: {passedPreview[key]}</div>
      </div>
    )
  }




  return (
    <div role="presentation">
      <div aria-live="polite">
        <div className="Graph-Title" >{title}</div>
        <div className="Screenreader-Only">
          <ScreenReaderReadout
          graphInfo={graphInfo}
          />
        </div>
      </div>
    <div className="Graph-Overall" aria-label="Graph">{renderChart}</div>
    </div>
  )
}





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

/*
Currently leaving width/height definitions in the custom tick code, rather than in styles.
The reason for this is that the results are strange in recharts and I have not been able to perfectly replicate them in css. 
If you put a custom tick in recharts with a foreign object in it, it seems that it does not have the same visual results as 
either settings for non-custom ticks, or a custom tick with just <text> and whatever width/height settings.

This may be able to be changed after I better understand the input->output discrepancies, especially because of issues on IOS safari.
But for now, at least there is value to having the width/height in the same place as the x/y definitions.
*/


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
