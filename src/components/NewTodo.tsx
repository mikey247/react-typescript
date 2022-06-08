import { useContext, useRef } from "react";
import TodosContext from "../store/todo-context";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    ctx.addTodo(enteredText!);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
