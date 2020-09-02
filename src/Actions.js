
export const GOTO = "GOTO";
export const ARTICLECLICK = "ARTICLECLICK";
export const GRAPHCLICK = "GRAPHCLICK";
export const CHARTORIGIN = "CHARTORIGIN";

export function GoTo(inputted="main"){
    return {type: GOTO,
    payload: inputted};
}

export function ArticleClick(inputted){
    return {type: ARTICLECLICK,
    payload: inputted};
}

export function GraphClick(theBar, theGraphNumber){
    return {type: GRAPHCLICK,
    payload: [theBar, theGraphNumber]};
}
export function ChartOrigin(theGraphNumber){
    return {type: CHARTORIGIN,
    payload: theGraphNumber};
}