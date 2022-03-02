import React from "react";
import { addTodo, toggleTodo, deleteTodo, clearCompleted } from "../store/action";
import { connect } from "react-redux";

function App(props) {
  function handleInput(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      props.dispatch(addTodo(event.target.value));
      event.target.value = "";
    }
  }

  function handleToggle(id) {
    props.dispatch(toggleTodo(id));
  }

  function removeTodo(id) {
    props.dispatch(deleteTodo(id));
  }

  function handleClear(){
    props.dispatch(clearCompleted());
  }

  return (
    <div className="app-container">
      <input
        type="text"
        name="todo"
        className="todo-input"
        placeholder="Enter Todo"
        onKeyPress={event => handleInput(event)}
      />
      <ul className="todo-list">
        {props.allTodos.todos.map(todo => (
          <li className="todo-list-item" key={todo.id} >
            <input type="checkbox" onClick={() => handleToggle(todo.id)} />
            <p>{todo.name}</p>
            <span onClick={() => removeTodo(todo.id)}>❌</span>
          </li>
        ))}
      </ul>
      <div className="filters-list">
        <button className="filter-btn active-filter">All</button>
        <button className="filter-btn">Active</button>
        <button className="filter-btn">Completed</button>
        <button className="filter-btn" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    allTodos: state.todoReducer
  };
}

export default connect(mapStateToProps)(App);
