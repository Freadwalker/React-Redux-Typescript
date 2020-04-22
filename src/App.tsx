import React from 'react';
import './App.css';
import Todo from './components/TodoList/Todo';
import Input from './components/Input/Input';


const App: React.FC = () =>{
  return <div data-test ="component-app"> <Todo data-test="component-todo"/> <Input/> </div>
}

export default App;
