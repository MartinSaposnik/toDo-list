import logo from './logo.svg';
import './App.css';
import data from './data.json'
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState(data)

  return (
    <div className="App">
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
