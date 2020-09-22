import {Articles, HTMLs, Graphs} from './articles';



/*
Currently, the data is based off an imported file rather than a database. 
This will be shifted to a database in the future once additional features 
and structures are committed to which will more strictly determine the shape 
of the data and reducer logic.  For the first version, I opted for creating 
the data quickly and not ending up overcommitted to a structure, especially 
since longterm specialization will define needs more. 

Questions like "Which complexities are stored in the reducer, 
and which in the data?" depends on undetermined specifics, 
so I avoided committing for now.
*/


export const initialStateReducer={
    section: "Article",
    transition:false,
    articleList:Articles,
    currentArticle:["HTML1", "GraphArranged_Genres_August", "HTML2", "HTML5", "GraphDate_Week2_August", "GraphArranged_Genres_August", "HTML6"],
    graphList: Graphs,
    HTMLList: HTMLs,
    currentGraphs: [ ["GraphGenre_Action_August","GraphArranged_Genres_August"], ["GraphArranged_Genres_August","GraphDate_Week3_August"], ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"]]
    /* current, origin. 0 is current, 1 is origin*/
  };

  

export const initialStateTestNews={
  section: "News",
  transition:false,
  articleList:Articles,
  currentArticle:["HTML4", "GraphArranged_Genres_August", "HTML2", "GraphDate_Week2_August", "GraphArranged_Genres_August"],
  graphList: Graphs,
  HTMLList: HTMLs,
  currentGraphs: [ ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"], ["GraphArranged_Genres_August","GraphDate_Week3_August"], ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"]]

};

export const initialStateTestAbout={
  section: "About",
  transition:false,
  articleList:Articles,
  currentArticle:["HTML4", "GraphArranged_Genres_August", "HTML2", "GraphDate_Week2_August", "GraphArranged_Genres_August"],
  graphList: Graphs,
  HTMLList: HTMLs,
  currentGraphs: [ ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"], ["GraphArranged_Genres_August","GraphDate_Week3_August"], ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"]]

};


export const initialStateTestArticleGraphSet1={
  section: "Article",
  transition:false,
  articleList:Articles,
  currentArticle:["HTML4", "GraphArranged_Genres_August", "HTML2", "GraphDate_Week2_August", "GraphArranged_Genres_August"],
  graphList: Graphs,
  HTMLList: HTMLs,
  currentGraphs: [ ["GraphArranged_Genres_August","GraphArranged_Genres_August"], ["GraphDate_Week2_August", "GraphDate_Week2_August"], ["GraphMovie_Byrnadel_August","GraphArranged_Genres_August"]]
};


export const initialStateTestArticleGraphSet2={
  section: "Article",
  transition:false,
  articleList:Articles,
  currentArticle:["HTML4", "HTML5", "GraphMovie_Outcasts_August"],
  graphList: Graphs,
  HTMLList: HTMLs,
  currentGraphs: [ ["GraphMovie_Outcasts_August","GraphMovie_Outcasts_August"]]
};
