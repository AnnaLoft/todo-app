import { TodoContext } from "../../utils/TodoStore";
import { Button } from "./Button";
import { Input } from "./Input";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

export const AddTaskWrapper = observer(() => {
  const todoStore = useContext(TodoContext);

  return (
    <div>
      <Input
        value={todoStore.newTitle}
        onChange={(value) => todoStore.setNewTitle(value)}
        placeholder="New task"
      />
      <Button
        onClick={() => todoStore.addTodo(todoStore.newTitle)}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Add Todo
      </Button>
    </div>
  );
});
