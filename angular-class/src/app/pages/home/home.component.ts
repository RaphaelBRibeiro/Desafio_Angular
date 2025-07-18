import { Component, inject } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { Router } from '@angular/router';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { CabecalhoComponent } from "../../components/cabecalho/cabecalho.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent, CarouselComponent, CabecalhoComponent],
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
