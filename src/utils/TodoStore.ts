import { makeAutoObservable } from "mobx";
import { TodoItem } from "../components/TodoItem";

class TodoStore {
  todos: TodoItem[] = [];
  filter: "all" | "completed" | "active" = "all";
  newTitle: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  // ================== Создание записи ==================
//   addTodo(title: string) {
//     const newTodo = new TodoItem(title);
//     //setTodos((prev) => [...prev, newTodo]);
//     this.todos.push(newTodo);
//     console.log(this.todos); 
//     console.log(this.todos.length);
    
//   }

addTodo(title: string) {
  const trimmedTitle = title.trim();
  if (trimmedTitle) {
    const newTodo = new TodoItem(trimmedTitle);
    this.todos.push(newTodo);
   
  }
   console.log(this.todos); 
    console.log(this.todos.length);
}


  // ================== Удаление записи ==================
  deleteTodo(id: number) {
    //setTodos((prev) => prev.filter((todo) => todo.id !== id));
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(this.todos.length);
  }
  
  // ================== Измнение записи ==================

  renameTodo(id: number, newTitle: string) {
    this.todos = this.todos.map(todo =>
    todo.id === id ? new TodoItem(newTitle, todo.id, todo.createdAt) : todo
  );
  }

  setNewTitle(title: string) {
    this.newTitle = title;
    //console.log(this.newTitle); 
  }

    //================== Переключение статуса выполнения ==================
  toggleComplete(id: number) {
    this.todos = this.todos.map(todo => 
    todo.id === id ? todo.cloneWithToggle() : todo
  );
//    const updatedTodo = this.todos.find(todo => todo.id === id);
//   if (updatedTodo) {
//     console.log(updatedTodo.completed ? 'Completed' : 'Active');
//   }
  }

  // ================== Фильтр ==================
  setFilter(newFilter: "all" | "completed" | "active") {
    this.filter = newFilter;
  }

get filteredTodos() {
  if (this.filter === "all") {
   // console.log(this.filter);
    return this.todos;
  } 
  if (this.filter === "completed") {
    //console.log(this.filter);
    return this.todos.filter(todos => todos.completed);
  } 
  if (this.filter === "active") {
   // console.log(this.filter);
    return this.todos.filter(todos => !todos.completed);
  } 
    return this.todos;
  
}
}

export const todoStore = new TodoStore();