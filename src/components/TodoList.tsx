import React from "react";
import {Todo} from "../todo.model";

interface TodoListProps {
    items: {
        id: string,
        text: string
    }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({items: todos, onDeleteTodo}) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>
                        {todo.text}
                        </span>
                        <button onClick={onDeleteTodo.bind(null, todo.id)}>
                            DELETE
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
