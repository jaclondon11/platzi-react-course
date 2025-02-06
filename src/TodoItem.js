import './TodoItem.css';

function TodoItem({text, completed, onComplete, onDelete}){
  return (
    <li className="TodoItem">
      <span 
        onClick={onComplete}
        className={`Icon Icon-check Icon-check 
        ${completed && "Icon-check--active"}`}>
        {completed}
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete"
        onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
