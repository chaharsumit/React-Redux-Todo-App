function todoReducer(state = { todos: [] }, action) {
  console.log(state.todos, action);
  switch (action.type) {
    case "ADD_TODO":
      return {...state, todos: state.todos.concat(action.todo)};
    case "TOGGLE_TODO":
      let todos = [...state.todos];
      todos = todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
      return {...state, todos: todos};
    case "DELETE_TODO":
      return {...state, todos: [...state.todos.filter(item => item.id !== action.id)]};
    case "CLEAR_TODOS":
      return {...state, todos: [...state.todos.filter( item => !item.isDone )]};
    default:
    return state;
  }
}

export default todoReducer;

/*

function todoReducer(state = { todos: [] }, action) {
  console.log(state.todos, action);
  switch (action.type) {
    case "ADD_TODO":
      return {...state, todos: state.todos.concat(action.todo)};
    case "TOGGLE_TODO":
      let todos = [...state.todos];
      todos = todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
      // console.log(action.id);
      // todos[action.id].isDone = !todos[action.id].isDone;
      //state.todos[action.id].isDone = !state.todos[action.id].isDone;
      return {...state, todos: todos};
    case "DELETE_TODO":
      return {...state, todos: [...state.todos.filter(item => item.id !== action.id)]};
    case "CLEAR_TODOS":
      return {...state, todos: [...state.todos.filter( item => !item.isDone )]};
    default:
    return state;
  }
}

export default todoReducer;

*/