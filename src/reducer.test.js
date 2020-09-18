import {reducer} from './reducerCode'
import {initialStateReducer} from './premade data/baselineState';



describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toMatchSnapshot()
    })
  
    it('should handle GOTO NEWS', () => {
      expect(
        reducer(initialStateReducer,
        {
          type: 'GOTO',
          payload: "News"
        })
      ).toMatchSnapshot()
    })
  })