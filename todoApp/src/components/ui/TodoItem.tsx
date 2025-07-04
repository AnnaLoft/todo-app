import { observer } from 'mobx-react-lite';
import styles from '../../style/todoitem.module.scss';
import { Input } from './Input';
import { Button } from './Button';
import { TodoStore } from '../../utils/TodoStore';
import type { TodoItem } from '../TodoItem';

interface TodoItemProps {
  store: TodoStore;
  todo: TodoItem;
}

export const TodoItemComponent = observer(({ 
  store,
  todo 
}: TodoItemProps) => {
  const handleTitleChange = (newTitle: string) => {
    store.renameTodo(todo.id, newTitle);
  };

  return (
    <li className={styles.list}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => store.toggleComplete(todo.id)}
      />
      <Input
        value={todo.title}
        onChange={handleTitleChange}
      />
      <Button 
        style={{ backgroundColor: 'gray', color: 'white' }} 
        onClick={() => store.deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </li>
  );
});