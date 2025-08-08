import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  imports: [],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {
  peliculas: string[] = [
    'assets/pelis/1.jpg',
    'assets/pelis/2.jpg',
    'assets/pelis/3.jpg',
    'assets/pelis/4.jpg',
    'assets/pelis/5.jpg',
    'assets/pelis/6.jpg',
    'assets/pelis/7.jpg',
    'assets/pelis/8.jpg',
  ]
}