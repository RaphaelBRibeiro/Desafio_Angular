import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient)
  
  login (nome: string, senha: string) : Observable<User> {
    return this.http.post<User>("http://localhost:3001/login", {nome, senha})
    .pipe(
      tap(
        (user) => {
          sessionStorage.setItem ("email", 'user')
        }
      )
    )
  }
} 
