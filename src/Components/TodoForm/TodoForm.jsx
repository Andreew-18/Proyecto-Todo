import React, { useState } from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext/TodoContext';
function TodoForm(){

    const {setOpenModal,addTodo} = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla" value={newTodoValue}
            onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button type='submit' className="TodoForm-button TodoForm-button--add">Agregar</button>
                <button type='button' onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
            </div>
        </form>
    )
}

export {TodoForm}