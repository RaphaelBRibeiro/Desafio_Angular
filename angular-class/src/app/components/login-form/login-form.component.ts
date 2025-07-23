import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmitLogin() {
    const { username, password } = this.loginForm.value;

    if (!this.loginForm.valid || !username || !password) {
      alert('Preencha todos os campos');
      return;
    }
    

    this.loginService.login(username, password).subscribe({
      next: (loggedInUser) => {
        if (loggedInUser) {
          sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
          this.router.navigate(['/home']);
        } else {
          alert('Usuário ou senha inválidos.');
        }
      },
      error: (error) => {
        console.error('Erro no login:', error);
        alert('Erro ao tentar fazer login. Verifique se o servidor da API está rodando e as credenciais estão corretas.');
      }
    });
  }
}