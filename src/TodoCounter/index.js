import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completed,
    totalTodoList,
  } = React.useContext(TodoContext);

  return (
    <h1 className='TodoCounter'>
      Completed <span>{completed}</span> of <span>{totalTodoList}</span> TODOs task
    </h1>
  );
}

export { TodoCounter };
