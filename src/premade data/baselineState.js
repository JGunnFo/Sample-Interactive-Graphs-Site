import {Articles, HTMLs, Graphs, Forms} from './articles';

export const initialStateReducer={
    section: "Article",
    transition:false,
    articleList:Articles,
    currentArticle:["HTML3", "GraphArranged_Genres_August", "HTML2", "GraphDate_Week2_August", "GraphArranged_Genres_August"],
    /*
    ^ie the HTMLGraphList
    v they use keys to get each
    */
    graphList: Graphs,
    formList: Forms,
    HTMLList: HTMLs,
    currentGraphs: [ ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"], ["GraphArranged_Genres_August","GraphDate_Week3_August"], ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"]]
    /* current, origin. 0 is current, 1 is origin*/

  };

  /*
  so currentGraphs doesnt store the graphs, 
  it stores a pair of string references like Current:Origin 
  so ["Graph2":"Graph1"], and then so graph function refers to the original, 
  but functions will reset the current to the original
  */

  

export const initialStateTest={
  section: "News",
  transition:false,
  articleList:Articles,
  currentArticle:["HTML3", "GraphArranged_Genres_August", "HTML2", "GraphDate_Week2_August", "GraphArranged_Genres_August"],
  /*
  ^ie the HTMLGraphList
  v they use keys to get each
  */
  graphList: Graphs,
  formList: Forms,
  HTMLList: HTMLs,
  currentGraphs: [ ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"], ["GraphArranged_Genres_August","GraphDate_Week3_August"], ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"]]
  /* current, origin. 0 is current, 1 is origin*/
};


export const initialStateTestAbout={
  section: "About",
  transition:false
};