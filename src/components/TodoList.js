import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList() {
    return (
      <ul>
        <li><TodoListItem/></li>
        <li><TodoListItem/></li>
      </ul>
    )  
  }