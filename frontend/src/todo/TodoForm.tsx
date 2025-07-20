import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

type TodoProps = {
    id: string;
    text: string;
}

type Props = {
    todos: TodoProps[];
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}


const TodoForm = ({ todos, setTodos }: Props) => {
    const textRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (textRef.current) {
            const value = textRef.current.value.trim();
            if (value === "") return;

            const newTodo: TodoProps = {
                id: uuidv4(),
                text: value,
            }
            setTodos([...todos, newTodo]);
            textRef.current.value = '';
        }
    }

    return (
            <div className="todo-header">
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={textRef} />
                    <input type="submit" value='追加' />
                </form>
            </div>
    )
}

export default TodoForm;