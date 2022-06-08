import React, { createContext, ReactNode, useState } from "react";
import Todo from "../models/todo";

const TodosContext = createContext<{
  items: Todo[];
  addTodo: (a: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: (a: string) => {},
  removeTodo: (id: string) => {},
});

export const TodoContextProvider = (props: { children: ReactNode }) => {
  const [todosArray, setTodosArray] = useState<Todo[]>([]);

  const addTodoHandler = (a: string) => {
    setTodosArray((prevTodosArray) => {
      return [...prevTodosArray, new Todo(a)];
    });
  };

  const removeTodoHandler = (id: string) => {
    const newArray = todosArray.filter((todo) => todo.id !== id);
    setTodosArray(newArray);
  };

  const context = {
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    items: todosArray,
  };
  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
