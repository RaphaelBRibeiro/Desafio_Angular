import { Component, inject } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { Router } from '@angular/router';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { SobreComponent } from "../../components/sobre/sobre.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, CarouselComponent, SobreComponent],
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
