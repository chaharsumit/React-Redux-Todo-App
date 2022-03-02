import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/style.css';
import { Provider } from 'react-redux';
import todoStore from './store';

ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>
, document.getElementById('root'));