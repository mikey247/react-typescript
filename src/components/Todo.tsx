import { ReactNode, useContext } from "react";
import TodosContext from "../store/todo-context";

type appProps = {
  item: string;
  id: string;
  // removeTodo: (id: string) => void;
  children?: ReactNode;
};

const Todo = (props: appProps) => {
  const ctx = useContext(TodosContext);
  const deleteTodo = () => {
    ctx.removeTodo(props.id);
  };

  return (
    <div>
      <li>{props.item}</li>
      {props.id}
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;
