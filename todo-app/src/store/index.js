import { createStore } from 'redux';

function todoReducer(state = [], action) {
  switch (action.type) {
    case "addTodo":
      state.push(action.todo);
      return state;
    case "toggleTodo":
      state[action.id].isDone = !state[action.id].isDone;
      return state;
    case "deleteTodo":
      state.splice(action.id, 1);
      return state;
    case "clear":
      return state.filter(todo => !todo.isDone);
    default:
      return state;
  }
}

let allTodos = createStore(todoReducer);

export default allTodos;