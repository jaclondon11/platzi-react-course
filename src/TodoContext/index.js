import React from 'react';
import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext();


const defaultTodoList = [
    { text: "cortar cebolla", completed: true },
    { text: "completar 1er modulo de react", completed: false },
    { text: "completar Intro a React", completed: false },
    { text: "llorar con la llorona", completed: false },
    { text: "cantar una canción", completed: false },
  ]
  const TODOS_APP_KEY = "TODOS_V1";
//   const INITIAL_VALUE = [];

function TodoProvider({ children }) {
    const {
        item: todoList,
        saveItem: saveTodoList,
        loading,
        error,
    } = useLocalStorage(TODOS_APP_KEY, defaultTodoList);

    const [searchValue, setSearchValue] = React.useState('');
    const completed = todoList.filter(todo => !!todo.completed).length;
    const totalTodoList = todoList.length;

    const completeTodo = (text) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex(task => task.text === text);
    newTodoList[index].completed = !newTodoList[index].completed;
    saveTodoList(newTodoList);
    }

    const deleteTodo = (text) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex(task => task.text === text);
    newTodoList.splice(index, 1)
    saveTodoList(newTodoList);
    }

    return (
        <TodoContext.Provider value={{
            completed,
            totalTodoList,
            searchValue,
            setSearchValue,
            todoList,
            completeTodo,
            deleteTodo,
            loading,
            error,
        }}>
            {children}
        </TodoContext.Provider>
      );
}

export { TodoContext, TodoProvider }