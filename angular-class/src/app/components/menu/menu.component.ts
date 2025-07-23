import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  router = inject(Router);
  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
   goToHome() {
    this.router.navigate(['/home']); 
  }

  goToContact() {
    this.router.navigate(['/contato']);
  }

  goToAboutUs() {
    this.router.navigate(['/quem-somos']);
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate([""])
  }
  
}