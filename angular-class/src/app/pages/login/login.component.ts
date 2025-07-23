import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, RegisterFormComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginModalOpen = false;
  isRegisterModalOpen = false;

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
  }

  closeModal() {
    this.isLoginModalOpen = false;
    this.isRegisterModalOpen = false;
  }

  switchToRegister() {
    this.isLoginModalOpen = false;
    this.isRegisterModalOpen = true;
  }
}