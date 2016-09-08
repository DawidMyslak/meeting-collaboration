import React from 'react';
import ReactDOM from 'react-dom';
import { animateScroll } from 'react-scroll';
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
  animateScroll.scrollToBottom();
};

store.subscribe(render);
render();
