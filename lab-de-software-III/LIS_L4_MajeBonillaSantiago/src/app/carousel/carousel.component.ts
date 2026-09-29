import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Promocion } from './promocion';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  promociones: Promocion[] = [];

  ngOnInit(): void {
    this.promociones = [
      {
        id: 0,
        imagen: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=500&fit=crop',
        titulo: 'Chequeo general -30%',
        descripcion: 'Valoración completa con nuestros especialistas durante todo el mes.'
      },
      {
        id: 1,
        imagen: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=500&fit=crop',
        titulo: 'Paquete de fisioterapia',
        descripcion: '5 sesiones + evaluación postural sin costo adicional.'
      },
      {
        id: 2,
        imagen: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&h=500&fit=crop',
        titulo: 'Consulta nutricional gratuita',
        descripcion: 'Primera cita sin costo al registrarte esta semana.'
      }
    ];
  }
}
