import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer,
})

let store = createStore(rootReducer);

export default store;