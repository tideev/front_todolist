import { useState } from "react";
import TodoTable from "./components/TodoTable";

export default function Todolist() {
    // States
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: '' });

    // Functions
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { ...todo, id: Date.now() }]);
        setTodo({ description: '', date: '' });
    };

    const handleInputChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };


    //return
    return (
        <>
            <h1>To do -list</h1>
            Description:
            <input
                type="text"
                name="description"
                value={todo.description}
                onChange={handleInputChange}
                placeholder=" Type here..."
            />
            Date:
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleInputChange}
            />
            <button onClick={addTodo}>Add Todo</button>
            <div>
                <TodoTable todos={todos} onDelete={deleteTodo} />
            </div>
        </>
    )
}
