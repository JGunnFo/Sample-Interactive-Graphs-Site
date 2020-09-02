import {Articles, HTMLs, Graphs, Forms} from './articles';

export const initialStateReducer={
    section: "article",
    transition:false,
    articleList:Articles,
    currentArticle:["Graph1","Graph2"],
    /*
    ^ie the HTMLGraphList
    v they use keys to get each
    */
    graphList: Graphs,
    formList: Forms,
    HTMLList: HTMLs,
    currentGraphs: [ ["Graph1","Graph2"], ["Graph2","Graph1"]]
    /* current, origin. 0 is current, 1 is origin*/

  };

  /*
  so currentGraphs doesnt store the graphs, 
  it stores a pair of string references like Current:Origin 
  so ["Graph2":"Graph1"], and then so graph function refers to the original, 
  but functions will reset the current to the original
  */

  

export const initialStateTest={
    section: "Main",
    transition:false
};


export const initialStateTestAbout={
  section: "About",
  transition:false
};