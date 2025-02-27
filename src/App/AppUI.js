import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { EmptyTodos } from '../EmptyTodos';
import { ErrorTodos } from '../ErrorTodos';
import { LoadingTodos } from '../LoadingTodos';
import { TodoContext } from '../TodoContext';


function AppUI(){
    return (
        <>
          <TodoCounter />
          <TodoSearch />
    
          <TodoContext.Consumer>
            {({
              loading,
              error,
              todoList,
              completeTodo,
              deleteTodo,
              searchValue,
              totalTodoList
            }) => (
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
            )}
          </TodoContext.Consumer>
          
          <TodoCreateButton/>
        </>
    );
}

export { AppUI }