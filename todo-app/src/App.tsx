
import { useTodos } from './utils/useTodos';
import { TodoList } from './components/ui/TodoList';
import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { Filter } from './components/ui/Filter';
import styles from './style/app.module.scss';
//import { useCallback } from 'react';

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
  
  // const handleToggleComplete = useCallback((id: number) => {
  //   toggleComplete(id);
  // }, [toggleComplete]);

  // const handleRename = useCallback((id: number, newTitle: string) => {
  //   renameTodo(id, newTitle);
  // }, [renameTodo]);

  // const handleDelete = useCallback((id: number) => {
  //   deleteTodo(id);
  // }, [deleteTodo]);
  
  const handleAdd = () => {
   
    if (newTitle.trim()) {
      addTodo(); 
      setNewTitle('');
    }
  };

  return (
    <div className={`container ${styles.app}`}>
      <Input
        value={newTitle}
        onChange={setNewTitle}
        placeholder="New task"
      />
      <Button onClick={handleAdd}>
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
