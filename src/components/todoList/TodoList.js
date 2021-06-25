import React from 'react';
import TodoListItem from '../todoListItem/';
import './TodoList.css';

export default function TodoList({todos}) {

    const elements = todos.map(item => {
        const {id, ...props} = item;
        return (
            <li className='list-group-item' key={id}>
                <TodoListItem {...props}/>
            </li>
        )
    });

    return (
      <ul className='list-group todo-list'>
          {elements}
      </ul>
    )  
  }