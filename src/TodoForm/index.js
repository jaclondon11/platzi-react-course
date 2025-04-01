import React from 'react';
import './TodoForm.css';


function TodoForm(){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Write your new TODO</label>
            <textarea
                placeholder='Learn React'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
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
