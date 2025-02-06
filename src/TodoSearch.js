import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
  console.log('Todo Search typed: ');
  console.log(searchValue);

  return (
    <input 
      className='TodoSearch' 
      placeholder="cut onions"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearch };
