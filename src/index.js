import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { animateScroll } from 'react-scroll';
import App from './App';
import reducer from './reducers';
import io from 'socket.io-client'

import './index.css';
import 'font-awesome/css/font-awesome.css';

const store = createStore(reducer);

let socket = io('http://localhost:3001');
socket.on('news', function (data) {
  socket.emit('my other event', { my: 'data' });
});

socket.on('ADD_WIDGET', function (action) {
  store.dispatch(action);
  animateScroll.scrollToBottom();
});

socket.on('UPDATE_WIDGET', function (action) {
  store.dispatch(action);
});

socket.on('REFRESH_USERS', function (action) {
  store.dispatch(action);
});

const render = () => {
  ReactDOM.render(
    <App store={store} socket={socket} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
