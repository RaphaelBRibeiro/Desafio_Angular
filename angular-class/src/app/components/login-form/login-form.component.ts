import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  userService = inject(UserService);
  router = inject(Router);
  isRegisterMode: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmitLogin() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      alert('Preencha todos os campos');
      return;
    }

    const loggedInUser = this.userService.login(email, password);
    if (loggedInUser) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }

  onSubmitRegister() {
    const { email, password } = this.registerForm.value;

    if (!this.registerForm.valid || !email || !password) {
      alert('Preencha todos os campos');
      return;
    }

    const newUser: User = { email, password }; // In a real app, hash the password here
    const registered = this.userService.register(newUser);

    if (registered) {
      alert('Cadastro realizado com sucesso! Faça login.');
      this.isRegisterMode = false; // Switch to login mode
      this.loginForm.reset();
      this.registerForm.reset();
    } else {
      alert('Usuário já existe.');
    }
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.loginForm.reset();
    this.registerForm.reset();
  }
}