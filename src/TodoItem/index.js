import './TodoItem.css';
import { ImRadioChecked, ImRadioUnchecked } from 'react-icons/im';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function TodoItem({text, completed, onComplete, onDelete}){
  return (
    <li className="TodoItem">
      <span 
        onClick={onComplete}
        className={`Icon Icon-check Icon-check 
        ${completed && "Icon-check--active"}`}
        >
        {completed? <ImRadioChecked/>: <ImRadioUnchecked/>}
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className='Icon Icon-delete span-icon-close'
        onClick={onDelete}>
          <AiOutlineCloseCircle />
      </span>
    </li>
  );
}

export { TodoItem };
