import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList() {
    return (
      <ul>
        <li><TodoListItem label='Drink beer'/></li>
        <li><TodoListItem label='Build React App' important/></li>
      </ul>
    )  
  }