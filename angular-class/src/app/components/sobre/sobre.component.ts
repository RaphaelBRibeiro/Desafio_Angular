import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  isModalOpen = false;
  selectedTitle = '';
  selectedText = '';
  selectedImageUrl = '';

  openModal(title: string, text: string, imageUrl: string) {
    this.isModalOpen = true;
    this.selectedTitle = title;
    this.selectedText = text;
    this.selectedImageUrl = imageUrl;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
/*(title: imageUrl: string, text: string, imageUrl: string)*/