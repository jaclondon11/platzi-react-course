import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';


function TodoForm(){
    const {
        addTodo,
        setModalOpen,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setModalOpen(false);
    }
    
    const onCancel = () => {
        setModalOpen(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea
                placeholder='Learn React'
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button-cancel'
                >Cancel</button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button-add'
                >Add</button>
            </div>              
        </form>
    );
}

export { TodoForm };
