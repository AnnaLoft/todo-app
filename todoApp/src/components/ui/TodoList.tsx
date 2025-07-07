import { observer } from "mobx-react-lite";
import { TodoItemComponent } from "./TodoItem";
import styles from "../../style/todos.module.scss";
import { TodoContext } from "../../utils/TodoStore";
import type { TodoItem } from "../TodoItem";
import { useContext } from "react";

export const TodoList = observer(() => {
  const todoStore = useContext(TodoContext);

  return (
    <ul className={styles.list}>
      {todoStore.filteredTodos.map((todo: TodoItem) => (
        <TodoItemComponent store={todoStore} key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});
