import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3001'; // URL da sua API

  constructor(private http: HttpClient) { }

  login(username: string, passwordHash: string): Observable<User | null> {
    return this.http.post<User | null>(`${this.apiUrl}/login`, { nome: username, senha: passwordHash });
  }

  // Manter o método register se for necessário para o futuro, mas não será usado agora
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
