import React, { useState, useEffect } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (message: string) => boolean;

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const cache = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(cache);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string): void => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prev => [newTodo, ...prev])
    }
    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }))
    }
    const removeHandler = (id: number) => {
        const isConfirmed: boolean = confirm('Please confirm your decision');
        if (isConfirmed) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler}></TodoForm>
            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
        </>
    )
}

export default TodosPage