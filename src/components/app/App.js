import React from 'react';
import AppHeader from '../appHeader/';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import './App.css';
import ItemAddForm from '../itemAddForm';

export default class App extends React.Component {

  maxId = 100;

  state ={
    todoData:
    [
      this.createTodoItem('Dring Beer'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  }

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label: label,
      important: false,
      done: false,
      importnant: false,
    }
  }

  toggleProp(arr, id, propName) {
    const res = [...arr];
    const item = arr.find(item => item.id === id);
    const index = arr.indexOf(item);
    res.splice(index, 1, {...item, [propName]: !item[propName]});
    return res;
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
        todoData: [...todoData, this.createTodoItem(text)]
      }
    });
  }

  onToggleImportant = id => {
    this.setState(({todoData}) => {
      return {todoData: this.toggleProp(todoData, id, 'important')};
    });
  }

  onToggleDone = id => {
    this.setState(({todoData}) => {
      return {todoData: this.toggleProp(todoData, id, 'done')};
    });
  }

  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
      <AppHeader  toDo={todoCount} done={doneCount}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList 
        todos={todoData} 
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
      />
      <ItemAddForm onClickAdd={this.addItem}/>
    </div>
    )
  }
}