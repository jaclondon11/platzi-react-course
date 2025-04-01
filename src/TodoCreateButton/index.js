import './TodoCreateButton.css'

function TodoCreateButton({ setModalOpen }) {
  
  return (
    <button 
      className="TodoCreateButton" 
      type='button' 
      onClick={
        () => {
          setModalOpen(state => !state)
        }
      }
      >
        +
    </button>
  );
}

export { TodoCreateButton };
