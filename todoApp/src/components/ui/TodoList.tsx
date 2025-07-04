import { observer } from 'mobx-react-lite';
import { TodoItemComponent } from './TodoItem';
import styles from '../../style/todos.module.scss';
import { TodoStore } from '../../utils/TodoStore';
import type { TodoItem } from '../TodoItem';

interface TodoListProps {
  store: TodoStore;
}

export const TodoList: React.FC<TodoListProps> = observer(({
  store
}) => {
  return (
    <ul className={styles.list}>
      {store.filteredTodos.map((todo: TodoItem) => (
        <TodoItemComponent
          store={store}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
});