import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { EmptyTodos } from '../EmptyTodos';
import { ErrorTodos } from '../ErrorTodos';
import { LoadingTodos } from '../LoadingTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';


function AppUI(){
  const {loading,
    error,
    todoList,
    completeTodo,
    deleteTodo,
    searchValue,
    totalTodoList,
    modalOpen,
    setModalOpen
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />
          <TodoSearch />
    
          <TodoList>
            {loading && (
              <>
                <LoadingTodos/>
                <LoadingTodos/>
                <LoadingTodos/>
              </>
            )}
            {error && <ErrorTodos/>}
            {(!loading && !totalTodoList === 0) && <EmptyTodos/>}
            {!loading && todoList
              .filter(task => task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
              .map(task => (
              <TodoItem 
                key={task.text}
                text={task.text} 
                completed={task.completed}
                onComplete={() => completeTodo(task.text)}
                onDelete={() => deleteTodo(task.text)}
              />
            ))}
          </TodoList>

          <TodoCreateButton 
            setModalOpen={setModalOpen}
          />
          
          {modalOpen && (
            <Modal>
              Feature to add TODOs in modal
            </Modal>
          )}
        </>
    );
}

export { AppUI }