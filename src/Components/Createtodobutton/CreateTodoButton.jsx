import React from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext';
export function CreateTodoButton(){
    const {setOpenModal} = React.useContext(TodoContext);
    return(
        <button className="CreateTodoButton" onClick={ 
            () => {
            setOpenModal(state => !state);
        }}>+</button>
    );
}