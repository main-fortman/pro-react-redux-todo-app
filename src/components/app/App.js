import React from 'react';
import AppHeader from '../appHeader/';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter, {statusFilters} from '../itemStatusFilter';
import './App.css';
import ItemAddForm from '../itemAddForm';

export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData:
    [
      this.createTodoItem('Drink Beer'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    searchText: '',
    statusFilter: statusFilters[0]
  }

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label: label,
      important: false,
      done: false,
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

  onChangeFilter = searchText => {
    this.setState({searchText});
  }

  onClickStatusFilter = statusFilter => {
    this.setState({statusFilter});
  }

  render() {
    const {todoData, searchText, statusFilter} = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;

    // by text
    let filteredTodoData = todoData.filter(
      item => !searchText || item.label.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1 );

    // by status
    filteredTodoData = filteredTodoData.filter(item => {
      return (statusFilter === 'Done' && item.done) ||
             (statusFilter === 'Active' && !item.done) ||
             statusFilter === 'All';
    });

    return (
      <div className="todo-app">
      <AppHeader  toDo={todoCount} done={doneCount}/>
      <div className="top-panel d-flex">
        <SearchPanel onChangeFilter={this.onChangeFilter}/>
        <ItemStatusFilter filter={statusFilter} onClickStatusFilter={this.onClickStatusFilter}/>
      </div>
      <TodoList 
        todos={filteredTodoData} 
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
      />
      <ItemAddForm onClickAdd={this.addItem}/>
    </div>
    )
  }
}