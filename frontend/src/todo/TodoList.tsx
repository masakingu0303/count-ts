type TodoProps = {
    id: string;
    text: string;
}

type Props = {
    todos: TodoProps[];
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const TodoList = ({todos, setTodos}:Props) => {

    const handleDelete = (id:string) => {
        const updateTodos = todos.filter((item) => item.id !== id);
        setTodos(updateTodos);
    }
    return (
        <ul className="todo-ul">
            {todos.map((item) => (
                <li className="todo-li" key={item.id} style={{ listStyle: 'none' }}>
                    {item.text}
                    <button className="todo-button" onClick={() => handleDelete(item.id)}>削除</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;