import { observer } from 'mobx-react-lite';
import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { TodoList } from './components/ui/TodoList';
import { Filter } from './components/ui/Filter';
import styles from './style/app.module.scss';
import { TodoStore } from './utils/TodoStore';
import { useState } from 'react';

const App = observer(() => {
  const [todoStore] = useState(() => new TodoStore());

  return (
    <div className={`container ${styles.app}`}>
      <Input 
        value={todoStore.newTitle}
        onChange={(value) => todoStore.setNewTitle(value)}
        placeholder="New task"
      />
      <Button 
        onClick={() => todoStore.addTodo(todoStore.newTitle)}
        style={{ backgroundColor: 'green', color: 'white' }}
      >
        Add Todo
      </Button>
      <Filter
        currentFilter={todoStore.filter}
        onChange={(filter) => todoStore.setFilter(filter)}
      />
      <TodoList store={todoStore}/>
    </div>
  );
});

export default App;