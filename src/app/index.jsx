import React from 'react';
import Gallery from './gallery';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import { Provider } from 'react-redux';
import '../style.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // compose(
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <div className="App">
          <Gallery />
        </div>
      </Provider>
    </DndProvider>
  );
};

export default App;
