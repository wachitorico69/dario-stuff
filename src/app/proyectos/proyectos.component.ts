import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  logo: string[] = [
    'assets/pro/logo2.png', 'assets/pro/logo.png'
  ];
  retro: string[] = [
    'assets/pro/retro.png', 'assets/pro/retro2.png', 'assets/pro/retro3.png'
  ];
  gorilla: string[] = [
    'assets/pro/gorilla/1.jpg', 'assets/pro/gorilla/2.jpg', 'assets/pro/gorilla/3.jpg', 'assets/pro/gorilla/4.jpg', 'assets/pro/gorilla/5.jpg',
    'assets/pro/gorilla/6.jpg', 'assets/pro/gorilla/7.jpg', 'assets/pro/gorilla/8.jpg', 'assets/pro/gorilla/9.jpg', 'assets/pro/gorilla/10.jpg',
    'assets/pro/gorilla/11.jpg', 'assets/pro/gorilla/12.jpg', 'assets/pro/gorilla/13.jpg', 'assets/pro/gorilla/14.jpg', 'assets/pro/gorilla/15.jpg',
    'assets/pro/gorilla/16.jpg'
  ];
  jojo: string[] = [
    'assets/pro/jojo/1.jpg', 'assets/pro/jojo/2.jpg', 'assets/pro/jojo/3.jpg', 'assets/pro/jojo/4.jpg', 'assets/pro/jojo/5.jpg',
    'assets/pro/jojo/6.jpg', 'assets/pro/jojo/7.jpg', 'assets/pro/jojo/8.jpg', 'assets/pro/jojo/9.jpg', 'assets/pro/jojo/10.jpg',
    'assets/pro/jojo/11.jpg', 'assets/pro/jojo/12.jpg', 'assets/pro/jojo/13.jpg', 'assets/pro/jojo/14.jpg', 'assets/pro/jojo/15.jpg',
    'assets/pro/jojo/16.jpg', 'assets/pro/jojo/17.jpg'
  ];
  ps: string[] = [
    'assets/pro/ps/1.jpg', 'assets/pro/ps/2.jpg', 'assets/pro/ps/3.jpg', 'assets/pro/ps/4.jpg', 'assets/pro/ps/5.jpg',
    'assets/pro/ps/6.jpg', 'assets/pro/ps/7.jpg', 'assets/pro/ps/8.jpg', 'assets/pro/ps/9.jpg', 'assets/pro/ps/10.jpg',
    'assets/pro/ps/11.jpg', 'assets/pro/ps/12.jpg', 'assets/pro/ps/13.jpg', 'assets/pro/ps/14.jpg'
  ];

  logoIndex = 0;
  retroIndex = 0;
  gorillaIndex = 0;
  jojoIndex = 0;
  psIndex = 0;
  
  nextImage(indexRef: 'logoIndex' | 'retroIndex' | 'gorillaIndex' | 'jojoIndex' | 'psIndex', images: string[]) {
    this[indexRef] = (this[indexRef] + 1) % images.length;
  }

  prevImage(indexRef: 'logoIndex' | 'retroIndex' | 'gorillaIndex' | 'jojoIndex' | 'psIndex', images: string[]) {
    this[indexRef] = (this[indexRef] - 1 + images.length) % images.length;
  }
}
