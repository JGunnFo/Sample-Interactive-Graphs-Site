import {reducer} from './reducerCode'
import {initialStateReducer} from './premade data/baselineState';
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "./Actions";



describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toMatchSnapshot()
    })
  
    it('should handle GOTO NEWS', () => {
      expect(
        reducer(initialStateReducer,
        {
          type: GOTO,
          payload: "News"
        })
      ).toMatchSnapshot()
    })

    it('should handle ARTICLECLICK HTML1GRAPH1HTML2', () => {
      expect(
        reducer(initialStateReducer,
        {
          type: ARTICLECLICK,
          payload: ["HTML1", "GraphArranged_Genres_August", "HTML2"]
        })
      ).toMatchSnapshot()
    })



    it('should handle GRAPHCLICK BYRNADELS SQUADRON SLOT 0 ', () => {
      expect(
        reducer(initialStateReducer,
        {
          type: GRAPHCLICK,
          payload: [{"name":"Byrnadel's Squadron"},0]
          /*
          realistically, only the name of the bar is actually used in the former part of 
          the payload for this dispatch. There is more data, such as
          [{"name":"Byrnadel's Squadron","sales":250,"x":39.06,"y":31.538461538461547,"width":72,"height":288.46153846153845,"value":250,"payload":{"name":"Byrnadel's Squadron","sales":250},"background":{"x":39.06,"y":20,"width":72,"height":300}},0]
          but i am leaving only the name in for now so that I can be more cogniscent of 
          the fact that I am using more of the bar data when implement such a thing.
          */
        })
      ).toMatchSnapshot()
    })



    it('should handle CHARTORIGIN 1', () => {
      expect(
        reducer(initialStateReducer,
        {
          type: CHARTORIGIN,
          payload: 1
        })
      ).toMatchSnapshot()
    })


  })