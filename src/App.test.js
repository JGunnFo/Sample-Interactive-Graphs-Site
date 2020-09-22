import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import TopComponent from './App';
import {initialStateTestNews, initialStateTestAbout, initialStateTestArticleGraphSet1, initialStateTestArticleGraphSet2, initialStateReducer} from './premade data/baselineState';
import ReactTestUtils from 'react-dom/test-utils'; // ES6




function genericSnapshotTestFunction(name, initialState){


describe(name, () => {

  let App
  let mockStore
  let theStore

  beforeAll(() => {
    
  mockStore = configureMockStore()
  theStore=mockStore(initialState)

  App = () => (
    <Provider store={theStore}>
        <TopComponent />
    </Provider>
)
  });
  

  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });


  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('renders correctly according to snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});




});

}

genericSnapshotTestFunction('<App with its actual starting state>', initialStateReducer)
genericSnapshotTestFunction('<App starting with News>', initialStateTestNews)
genericSnapshotTestFunction('<App starting with About>', initialStateTestAbout)
genericSnapshotTestFunction('<App starting with Article Graph Set 1>', initialStateTestArticleGraphSet1)
genericSnapshotTestFunction('<App starting with Article Graph Set 2>', initialStateTestArticleGraphSet2)
