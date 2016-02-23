'use strict';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('counter-increment');
const decrementButton = document.getElementById('counter-decrement');

const render = () => {
  counterDisplay.innerHTML = store.getState();
};

incrementButton.addEventListener('click', ()=>{
  store.dispatch({type : 'INCREMENT'});
});

decrementButton.addEventListener('click', ()=>{
  store.dispatch({type : 'DECREMENT'});
});

store.subscribe(render);
render();
