import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';

function App() {

  const [todo, settodo] = useState([])

  function addtodo(item) {
    const newtodo = [...todo, item]
    settodo(newtodo)
  }

  return (
    <div className="app">
      <AddTodo addtodo={addtodo}/>
      <List todo={todo}/>
    </div>
  );
}

export default App;
