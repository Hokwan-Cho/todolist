import React, { Component } from 'react';
import CheckItem from './checkItem';


class CheckList extends Component {

  render() {
    const { todos, onToggle, onRemove } = this.props;
    
    const todoList = todos.map(
      ({id, text, checked}) => (
        <CheckItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}
export default CheckList;