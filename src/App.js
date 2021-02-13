import React ,{ Component } from 'react';
import "./App.css";
import { TodoApp } from './components/TodoApp';

class App extends Component{
  render () {
    return (
      <div className='todo-app'>
      <TodoApp />
      </div>
    );
  }
}
export {App};
