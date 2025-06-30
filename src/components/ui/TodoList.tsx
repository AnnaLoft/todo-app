import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoItem } from '../TodoItem';
import { TodoItemComponent } from './TodoItem';
import styles from '../../style/todos.module.scss';

interface TodoListProps {
  todos: TodoItem[];
  onToggleComplete: (id: number) => void;
  onRename: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = observer(({ 
  todos, 
  onToggleComplete, 
  onRename, 
  onDelete }) => {

//     const handleToggle = (todo: TodoItem) => {
//   todo.toggleCompleted();
// };
  
  return (
    <ul className={`ul ${styles.list}`}>
      {todos.map((todo) => (
        <TodoItemComponent
          key={todo.id}
          todo={todo}
          onToggleComplete={() => onToggleComplete(todo.id)}
          onRename={(newTitle) => onRename(todo.id, newTitle)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
    
  );
});
