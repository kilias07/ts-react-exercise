import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import NewTodo from "./components/newTodo";
import {Todo} from "./todo.model";


const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {id: Math.random().toString(), text}
        ]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    }
    return (
        <div>
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        </div>
    )
}

export default App;
