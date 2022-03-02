import React from "react";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  changeFilter
} from "../store/action";
import { connect } from "react-redux";

function App(props) {
  let todos = [];

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

  function handleClear() {
    props.dispatch(clearCompleted());
  }

  function handleFilter({ target }) {
    props.dispatch(changeFilter(target.innerText.toUpperCase()));
  }

  function filterTodos() {
    console.log(props.filter);
    switch (props.filter) {
      case "Active":
        todos = props.allTodos.todos.filter(todo => !todo.isDone);
        break;
      case "Completed":
        todos = props.allTodos.todos.filter(todo => todo.isDone);
        break;
      case "All":
        todos = props.allTodos.todos;
        break;
      default:
        todos = props.allTodos.todos;
        break;
    }
  }

  filterTodos();

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
        {todos.map(todo => (
          <li className="todo-list-item" key={todo.id}>
            <input type="checkbox" onChange={() => handleToggle(todo.id)} checked={todo.isDone}/>
            <p>{todo.name}</p>
            <span onClick={() => removeTodo(todo.id)}>❌</span>
            {filterTodos()}
          </li>
        ))}
      </ul>
      <div className="filters-list">
        <button onClick={handleFilter} className={props.filter === 'All' ? 'filter-btn active-filter' : "filter-btn"}>
          All
        </button>
        <button onClick={handleFilter} className={props.filter === 'Active' ? 'filter-btn active-filter' : "filter-btn"}>
          Active
        </button>
        <button onClick={handleFilter} className={props.filter === 'Completed' ? 'filter-btn active-filter' : "filter-btn"}>
          Completed
        </button>
        <button className="filter-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    allTodos: state.todoReducer,
    filter: state.filterReducer
  };
}

export default connect(mapStateToProps)(App);
