import { makeAutoObservable, action, computed } from "mobx";
import { TodoItem } from "../components/TodoItem";

export class TodoStore {
  todos: TodoItem[] = [];
  filter: "all" | "completed" | "active" = "all";
  newTitle: string = '';

  constructor() {
    makeAutoObservable(this, {
      addTodo: action,
      deleteTodo: action,
      renameTodo: action,
      toggleComplete: action,
      setFilter: action,
      setNewTitle: action,
      filteredTodos: computed
    });
  }

  // ================== Создание записи ==================
  addTodo(title: string) {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTodo = new TodoItem(trimmedTitle, Date.now(), new Date());

    this.todos.push(newTodo);
  }

  // ================== Удаление записи ==================
  deleteTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  
  // ================== Измнение записи ==================
  renameTodo(id: number, newTitle: string) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.title = newTitle.trim();
    }
  }

  setNewTitle(title: string) {
    this.newTitle = title;
  }

  
  toggleComplete(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  setFilter(newFilter: "all" | "completed" | "active") {
    this.filter = newFilter;
  }

  get filteredTodos() {
    switch (this.filter) {
      case "completed":
        return this.todos.filter(todo => todo.completed);
      case "active":
        return this.todos.filter(todo => !todo.completed);
      default:
        return this.todos;
    }
  }
}