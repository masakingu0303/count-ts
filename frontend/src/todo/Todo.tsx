import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

type TodoProps = {
    id: string;
    text: string;
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);

    return (
        <>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}/>
        </>
    )
}

export default Todo;