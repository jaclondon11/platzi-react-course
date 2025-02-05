import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const todoList = [
  {text: "cortar cebolla", completed : true},
  {text: "completar Intro a React", completed : false},
  {text: "llorar con la llorona", completed : false}
] 

let completed = 1

function App() {
  return (
    <>
      <TodoCounter completed={completed} total={todoList.length} />
      <TodoSearch/>
      
      <TodoList>
        {todoList.map(task => (
          <TodoItem text={task.text} completed={task.completed}/>
        ))}
      </TodoList>
      
      <TodoCreateButton/>

      </>
  );
}

export default App;
