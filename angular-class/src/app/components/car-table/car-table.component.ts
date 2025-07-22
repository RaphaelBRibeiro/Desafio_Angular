import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent {
  @Input() vin: string = "";
  @Input() odometro: number = 0;
  @Input() nivelCombustivel: number = 0;
  @Input() status: string = "";
  @Input() lat: number = 0;
  @Input() long: number = 0;

  getFuelColor(): string {
    if (this.nivelCombustivel < 31) {
      return '#ff4d4d'; // red
    } else if (this.nivelCombustivel >= 32 && this.nivelCombustivel <= 69) {
      return '#ffd700'; // yellow
    } else {
      return '#4CAF50'; // green
    }
  }

  getStatusClass(): string {
    if (this.status.toUpperCase() === 'ON') {
      return 'status-on';
    } else if (this.status.toUpperCase() === 'OFF') {
      return 'status-off';
    } else {
      return ''; // Default or no specific class
    }
  }
}
