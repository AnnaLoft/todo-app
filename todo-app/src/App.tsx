
import { useTodos } from './utils/useTodos';
import { TodoList } from './components/ui/TodoList';
import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { Filter } from './components/ui/Filter';
import styles from './style/app.module.scss';

function App() {
  const {
    filteredTodos,
    filter,
    setFilter,
    newTitle,
    setNewTitle,
    addTodo,
    deleteTodo,
    renameTodo,
    toggleComplete
  } = useTodos();

  return (
    <div className={`container ${styles.app}`}>
      <Input
        value={newTitle}
        onChange={setNewTitle}
        placeholder="New task"
      />
      <Button onClick={addTodo}>
        Add task
      </Button>
      <Filter currentFilter={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggleComplete={toggleComplete}
        onRename={renameTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
