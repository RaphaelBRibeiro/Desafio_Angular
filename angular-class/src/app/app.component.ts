import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodaPeComponent } from './components/roda-pe/roda-pe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodaPeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-class';
}
