import React from 'react';
import './App.css';
import Todo from './components/TodoList/Todo';

const App: React.FC = () =>{
  return <div data-test ="component-app"> <Todo data-test="component-todo"/> </div>
}

export default App;
