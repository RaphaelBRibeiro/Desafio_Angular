import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    'ford-expedition.jpg',
    'ford-focus.png',
    'ford_mustang_mach.jpg',
    'ford-everest-titanium.png',
    'Ford-Mustang-Mach-E.jpg'
    
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.next(), 3000); // troca a cada 3s
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  
}
