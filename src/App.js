import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const defaultTodoList = [
  {text: "cortar cebolla", completed : true},
  {text: "completar 1er modulo de react", completed : false},
  {text: "completar Intro a React", completed : false},
  {text: "llorar con la llorona", completed : false},
  {text: "cantar una canción", completed : false},
] 
const TODOS_APP_KEY = "TODOS_V1";
const INITIAL_VALUE = [];

function useLocalStorage(itemName, initialValue){
  debugger
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  const [todoList, saveTodoList] = useLocalStorage(TODOS_APP_KEY, defaultTodoList);
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
    <>
      <TodoCounter completed={completed} total={totalTodoList} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todoList
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
      
      <TodoCreateButton/>

      </>
  );
}

export default App;
