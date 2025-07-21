import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginModalOpen = false;

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  closeModal() {
    this.isLoginModalOpen = false;
  }
}