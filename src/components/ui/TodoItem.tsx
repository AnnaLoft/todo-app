import React from 'react';
import { TodoItem } from '../TodoItem';
import { observer } from 'mobx-react-lite';
import styles from '../../style/todoitem.module.scss';
import { Input } from './Input';
import { Button } from './Button';

interface TodoItemProps {
  todo: TodoItem;
  onToggleComplete: () => void;
  onRename: (newTitle: string) => void;
  onDelete: () => void;
}

export const TodoItemComponent: React.FC<TodoItemProps> = observer(({ 
  todo, 
  onToggleComplete, 
  onRename, 
  onDelete }) => {
    
  return (
    <li className={`input ${styles.list}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleComplete}
      />
      <Input
        value={todo.title}
        onChange={(value) => onRename(value)}
      />
      <Button style={{ backgroundColor: 'gray', color: 'white' }} onClick={onDelete}>
        Delete
      </Button>
    </li>
  );
});