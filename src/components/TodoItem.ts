import { makeAutoObservable } from 'mobx';

export class TodoItem {
  readonly id: number;
  readonly createdAt: Date;
  #title: string;
  #completed: boolean;

  constructor(title: string, id?: number, createdAt?: Date) {
    this.id = id ?? Date.now() + Math.random();
    this.#title = title;
    this.#completed = false;
    this.createdAt = createdAt ?? new Date();

    makeAutoObservable(this); 
  }

  get title() {
    return this.#title;
  }

  set title(newTitle: string) {
    this.#title = newTitle;
  }

  get completed() {
    return this.#completed;
  }

  //================== Переключение статуса ==================
  toggleCompleted() {
    this.#completed = !this.#completed;
    
  }

  //================== Копирование таски с измнением статуса ==================
  cloneWithToggle(): TodoItem {
    const clone = new TodoItem(this.#title, this.id, this.createdAt);
    clone.#completed = !this.#completed;
    return clone;
  }
}
