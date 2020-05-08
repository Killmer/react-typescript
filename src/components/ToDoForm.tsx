import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        const { onAdd } = props;
        if(event.key === 'Enter') {
            onAdd(title);
            setTitle('');
        } 
    }

    return (
        <div className="input-field mt2">
            <input
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                type="text"
                id="title"
                placeholder="Enter your task"
            />
            <label htmlFor="title" className="active">
                Task name
        </label>
        </div>
    )
};

export default TodoForm;