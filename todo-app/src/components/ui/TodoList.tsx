import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoItemComponent } from './TodoItem'
import styles from '../../style/todos.module.scss';

interface TodoListProps {
  todos: TodoItem[];
  onToggleComplete: (id: number) => void;
  onRename: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

  export const TodoList: React.FC<TodoListProps> = React.memo(({
  todos,
  onToggleComplete,
  onRename,
  onDelete,
}) => {
  console.log('todoList')
  return (
    <ul className={`ul ${styles.list}`}>
      {todos.map((todo) => (
        <TodoItemComponent
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onRename={onRename}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
  });
