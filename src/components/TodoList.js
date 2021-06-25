import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({todos}) {

    const elements = todos.map(item => {
        return (
            <li key={item.label}>
                <TodoListItem {...item}/>
            </li>
        )
    });

    return (
      <ul>
          {elements}
      </ul>
    )  
  }