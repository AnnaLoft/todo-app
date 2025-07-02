import React from 'react';
import styles from '../../style/todoitem.module.scss';
import { TodoItem } from '../TodoItem';
import { Input } from './Input';
import { Button } from './Button';

interface TodoItemProps {
  todo: TodoItem;
  onToggleComplete: (id: number) => void;
  onRename: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

const areEqual = (prevProps: TodoItemProps, nextProps: TodoItemProps) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.title === nextProps.todo.title &&
    prevProps.todo.completed === nextProps.todo.completed
  );
};

export const TodoItemComponent: React.FC<TodoItemProps> = React.memo(({
  todo,
  onToggleComplete,
  onRename,
  onDelete,
}) => {
  console.log('todoItem')
  return (
    <li className={`input ${styles.list}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <Input
        value={todo.title}
        onChange={(value) => onRename(todo.id, value)}
      />
      <Button onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </li>
  );
}, areEqual);
