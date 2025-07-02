import { useState, useMemo, useCallback } from "react";
import { TodoItem } from "../components/TodoItem";

export function useTodos() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTitle, setNewTitle] = useState("");

  // ================== Создание записи ==================
  // const addTodo = (title: string) => {
  //   const newTodo = new TodoItem(title);
  //   setTodos((prev) => [...prev, newTodo]);
  // };

  // const handleAddTodo = () => {
  //   if (newTitle.trim()) {
  //     addTodo(newTitle.trim());
  //   }
  // };
    
  const handleAddTodo = useCallback(() => {
    if (newTitle.trim()) {
      const newTodo = new TodoItem(newTitle);
    setTodos((prev) => [...prev, newTodo]);
      setNewTitle('');
    }
  },[newTitle, setNewTitle]);

  // ================== Удаление записи ==================
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // ================== Измнение записи ==================
  const renameTodo = (id: number, newTitle: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? new TodoItem(newTitle, todo.id, todo.createdAt) : todo
      )
    );

  };

  const handleSetNewTitle = (title: string) => {
    setNewTitle(title);
  };

  // ================== Переключение статуса выполнения ==================
  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? todo.cloneWithToggle() : todo))
    );
  };

  // ================== Фильтр ==================
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "all") return true;
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  const handleFilterChange = useCallback((newFilter: "all" | "completed" | "active") => {
    setFilter(newFilter);
  }, []);

  return {
    todos,
    filteredTodos,
    filter,
    setFilter: handleFilterChange,
    newTitle,
    // setNewTitle: handleSetNewTitle,
    setNewTitle: useCallback(handleSetNewTitle, []),
    //addTodo: handleAddTodo,
    addTodo: useCallback(handleAddTodo, [handleAddTodo]),
    deleteTodo: useCallback(deleteTodo, []),
    renameTodo: useCallback(renameTodo, []),
    toggleComplete: useCallback(toggleComplete, []),
  };
}
