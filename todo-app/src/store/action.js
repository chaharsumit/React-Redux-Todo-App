export function addTodo(todo){
  return {
    type: 'ADD_TODO',
    todo: {
      name: todo,
      isDone: false, 
      id: Math.random().toString(16).slice(2)
    }
  }
}

export function toggleTodo(id){
  return {
    type: 'TOGGLE_TODO',
    id: id, 
  }
}

export function deleteTodo(id){
  return {
    type: 'DELETE_TODO',
    id: id,
  }
}

export function clearCompleted(){
  return {
    type: 'CLEAR_TODOS',
  }
}

export function changeFilter(filter){
  return {
    type: `FILTER_${filter}`,
  }
}