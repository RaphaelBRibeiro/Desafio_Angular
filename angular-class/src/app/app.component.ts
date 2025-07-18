import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodaPeComponent } from './components/roda-pe/roda-pe.component';
import { CommonModule } from '@angular/common';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodaPeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-class';
  router = inject(Router)
  isLoginPage$: Observable<boolean>;

  constructor() {
    this.isLoginPage$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.url === '/' || event.urlAfterRedirects === '/')
    );
  }
}
