import React from "react";
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoCounter() {

 const {completedTodos,totalTodos} = React.useContext(TodoContext);
    return(
      
      <h1>Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>

    );
}