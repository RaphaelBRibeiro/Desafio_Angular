import { Component, inject } from '@angular/core';
import { BoasVindasComponent } from "../../components/boas-vindas/boas-vindas.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BoasVindasComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  logout(){
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
