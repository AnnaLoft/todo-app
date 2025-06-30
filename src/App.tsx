import { observer } from 'mobx-react-lite';
import { todoStore } from './utils/TodoStore';
import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { Filter } from './components/ui/Filter';
import { TodoList } from './components/ui/TodoList';
import styles from './style/app.module.scss';

const App = observer(() => {

  const handleAdd = () => {
    todoStore.addTodo(todoStore.newTitle);
    todoStore.setNewTitle('');
  };
  

  return (
    <div className={`container ${styles.app}`}>
      <Input
        value={todoStore.newTitle}
        onChange={(value) => todoStore.setNewTitle(value)}
        placeholder="New task"
      />
      <Button 
        onClick={handleAdd} style={{ backgroundColor: 'green', color: 'white' }}>
        Add task
      </Button>
      <Filter currentFilter={todoStore.filter} onChange={(filter) => todoStore.setFilter(filter)}/>
      <TodoList
        todos={todoStore.filteredTodos}
        onToggleComplete={(id) => todoStore.toggleComplete(id)}
        onRename={(id, newTitle) => todoStore.renameTodo(id, newTitle)}
        onDelete={(id) => todoStore.deleteTodo(id)}
      />
    </div>
  );
});

export default App;