import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './Model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }

  const onDragEnd = (result: DropResult) => {
    
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className='App'>
        <span className='heading'>ToDoList</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      </div>
    </DragDropContext>
  );
}

export default App;
