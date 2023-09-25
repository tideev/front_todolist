import { useState } from "react";

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


    const itemRows = todos.map((todo, index) => (
        <tr key={index}>
            <td>{todo.description}</td>
            <td style={{ paddingLeft: "50px", paddingRight: "50px" }}> - </td>
            <td>{todo.date}</td>
            <td style={{ padding: "10px" }}>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
        </tr>
    ));

    //return
    return (
        <>
            <h1>To do -list</h1>
            Discription:
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
                <table>
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <td style={{ paddingLeft: "50px", paddingRight: "50px" }}>   </td>
                            <th>Date</th>
                        </tr>
                        {itemRows}
                    </tbody>
                </table>
            </div>
        </>
    );
}
