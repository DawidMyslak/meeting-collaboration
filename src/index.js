import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';

import './index.css';
import 'font-awesome/css/font-awesome.css';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
