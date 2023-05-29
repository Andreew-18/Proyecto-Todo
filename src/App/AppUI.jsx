import React from "react";
import { CreateTodoButton } from "../Components/Createtodobutton/CreateTodoButton";
import { TodoCounter } from "../Components/Todocounter/TodoCounter";
import { TodoList } from "../Components/Todolist/TodoList";
import { TodoItem } from "../Components/Todoitem/TodoItem";
import { TodoSearch } from "../Components/Todosearch/TodoSearch";
import { TodosLoading } from "../Components/TodosLoading/TodosLoading";
import { TodosError } from "../Components/TodosError/TodosError";
import { EmptyTodos } from "../Components/TodoEmpty/EmptyTodos";
import { Modal } from "../Components/Modal/Modal";
import { TodoContext } from "../Components/TodoContext/TodoContext";
import { TodoForm } from "../Components/TodoForm/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.parrafo}
            parrafo={todo.parrafo}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.parrafo)}
            onDelete={() => deleteTodo(todo.parrafo)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

      {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>)}
    </>
  );
}

export {AppUI}