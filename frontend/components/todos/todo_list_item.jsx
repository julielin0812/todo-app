import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = Object.assign(
      {},
      this.props.todo,
      {done: !this.props.todo.done }
    );
    this.props.receiveTodo(toggledTodo);
  }

  render() {
    // deconstruct props object
    const { todo, removeTodo } = this.props;
    // deconstruct todo object
    const { title, done } = todo;

    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={ todo } />;
    }

    return (
      <li className='todo-li'>
        <div className='todo-item'>
          <h3>
            <a onClick={ this.toggleDetail }>{ title }</a>
          </h3>
          <button
            className={ done ? 'undo' : 'done'}
            onClick={ this.toggleTodo }>
            { done ? 'Undo' : 'Done'}
          </button>
        </div>
        { detail }
      </li>
    );
  }
}
