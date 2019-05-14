import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleTodoInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    handleAddTodo = e => {
        e.preventDefault();
    const { text } = this.state;
    const newTodo = {
      text,
      completed: false,
      id: this.props.todos ? this.props.todos.length : 0
    };
    this.props.addTodo(newTodo);
    this.setState({
      text: ""
    });
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <form>
          <input
            onChange={this.handleTodoInput}
            name="text"
            value={this.state.text}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </form>
        {todos.map(todo => {
          return <li key={todo.id}> {todo.text}</li>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
