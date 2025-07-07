import { observer } from "mobx-react-lite";
import { TodoList } from "./components/ui/TodoList";
import { Filter } from "./components/ui/Filter";
import { AddTaskWrapper } from "./components/ui/AddTaskWraper";
import styles from "./style/app.module.scss";
import { TodoContext, TodoStore } from "./utils/TodoStore";

const App = observer(() => {
  return (
    <div className={`container ${styles.app}`}>
      <TodoContext.Provider value={new TodoStore()}>
        <AddTaskWrapper></AddTaskWrapper>
        <Filter />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
});

export default App;
