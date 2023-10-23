import { useState } from "react";
import TodoGrid from "./components/TodoGrid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Todolist() {
    // States
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: null, priority: '' });

    // Functions
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { ...todo, id: Date.now() }]);
        setTodo({ description: '', date: null, priority: '' });
    };

    const handleInputChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setTodo({ ...todo, date });
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todoItem => todoItem.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1></h1>

            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    variant="standard"
                    name="description"
                    value={todo.description}
                    onChange={handleInputChange}
                    placeholder="Type here..."
                />
    
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date"
                        format="DD.MM.YYYY"
                        value={todo.date}
                        onChange={handleDateChange}
                       // slotProps={{ textField: { variant: 'outlined' } }}
                    />
                </LocalizationProvider>
                
                <TextField
                    label="Priority"
                    variant="standard"
                    name="priority"
                    value={todo.priority}
                    onChange={handleInputChange}
                    placeholder="Type here..."
                />
                <Button 
                    onClick={addTodo} 
                    variant="contained">
                    Add
                </Button>
            </Stack>

            <TodoGrid
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </>
    )
}
