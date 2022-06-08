import { ReactNode, useContext } from "react";
import TodosContext from "../store/todo-context";
import TodoDetail from "./Todo";
type appProps = {
  // items: Todo[];
  children?: ReactNode;
};
const Todos = (props: appProps) => {
  const ctx = useContext(TodosContext);

  const items = ctx.items;

  return (
    <div>
      <ul>
        {items.map((item) => (
          <TodoDetail key={item.id} item={item.text} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
