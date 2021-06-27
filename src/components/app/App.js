import React from 'react';
import AppHeader from '../appHeader/';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import './App.css';
import ItemAddForm from '../itemAddForm';

export default class App extends React.Component {

  state ={
    todoData:
    [
      {
        label: 'Dring Beer',
        important: false,
        id: 1
      },
      {
        label: 'Make Awesome App',
        important: true,
        id: 2
      },
      {
        label: 'Have a lunch',
        important: false,
        id: 3
      },
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(el => el.id === id);
      const copy = todoData.slice();
      copy.splice(idx, 1);
      return {todoData: copy};
    });
  }

  addItem = (text) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, {
          label: text,
          important: false,
          id: Date.now()
        }]
      }
    });
  }

  render() {
    return (
      <div className="todo-app">
      <AppHeader  toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList 
        todos={this.state.todoData} 
        onDeleted={this.deleteItem}
      />
      <ItemAddForm onClickAdd={this.addItem}/>
    </div>
    )
  }
}