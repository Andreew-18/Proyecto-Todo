
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css'

export function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
    return(
        <input
      placeholder="Que quieres buscar??"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        
      }}
    />
    )
}