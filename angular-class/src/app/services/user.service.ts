import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private readonly USERS_STORAGE_KEY = 'local_users';

  constructor() {
    this.loadUsers();
  }

  private loadUsers(): void {
    const usersJson = localStorage.getItem(this.USERS_STORAGE_KEY);
    if (usersJson) {
      this.users = JSON.parse(usersJson);
    }
  }

  private saveUsers(): void {
    localStorage.setItem(this.USERS_STORAGE_KEY, JSON.stringify(this.users));
  }

  register(user: User): boolean {
    if (this.users.some(u => u.username === user.username)) {
      return false; // User already exists
    }
    this.users.push(user);
    this.saveUsers();
    return true;
  }

  login(username: string, passwordHash: string): User | null {
    const user = this.users.find(u => u.username === username && u.password === passwordHash);
    return user || null;
  }
}