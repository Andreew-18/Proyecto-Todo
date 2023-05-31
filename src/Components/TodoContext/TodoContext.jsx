import React from "react";
// import  { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  

  const searchedTodos = todos.filter((todo) => {
    const todoParrafo = todo.parrafo.toLowerCase();
    const searchParrafo = searchValue.toLowerCase();
    return todoParrafo.includes(searchParrafo);
  }
  );

  const addTodo = (parrafo) => {
    const newTodos = [...todos];
    newTodos.push({ 
      parrafo,
      completed: false,
    });
    saveItem(newTodos);
  };

  const completeTodo = (parrafo) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.parrafo === parrafo);
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };

  const deleteTodo = (parrafo) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.parrafo === parrafo);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    > { children } </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
