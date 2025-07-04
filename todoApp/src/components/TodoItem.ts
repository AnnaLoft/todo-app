import { makeAutoObservable } from 'mobx';

export class TodoItem {
  readonly id: number;
  readonly createdAt: Date;
  title: string;
  completed: boolean;

  constructor(title: string, id?: number, createdAt?: Date) {
    this.id = id ?? Date.now();
    this.title = title.trim();
    this.completed = false;
    this.createdAt = createdAt ?? new Date();
    makeAutoObservable(this);
  }
}
