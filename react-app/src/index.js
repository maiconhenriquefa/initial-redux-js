import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return (state = state + 1);
    case 'DECREMENTAR':
      return (state = state - 1);
    default:
      return state;
  }
}

// const store = createStore(
//   reducer,
//   window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
//     window.__REACT_DEVTOOLS_GLOBAL_HOOK__(),
// );

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);