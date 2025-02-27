import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { EmptyTodos } from '../EmptyTodos';
import { ErrorTodos } from '../ErrorTodos';
import { LoadingTodos } from '../LoadingTodos';


function AppUI({
    completed,
    totalTodoList,
    searchValue,
    setSearchValue,
    todoList,
    completeTodo,
    deleteTodo,
    loading,
    error
}){
    return (
        <>
          <TodoCounter completed={completed} total={totalTodoList} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
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
          
          <TodoCreateButton/>
        </>
    );
}


export { AppUI }