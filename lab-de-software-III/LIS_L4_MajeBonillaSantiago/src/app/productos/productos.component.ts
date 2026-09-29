import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [];

  ngOnInit(): void {
    this.productos = [
      { nombre: 'Rodillo de masaje', precio: '$45.000', imagen: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=200&fit=crop' },
      { nombre: 'Banda elástica de resistencia', precio: '$28.000', imagen: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=200&fit=crop' },
      { nombre: 'Batido proteico natural', precio: '$62.000', imagen: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop' },
      { nombre: 'Cojín ortopédico cervical', precio: '$54.000', imagen: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=300&h=200&fit=crop' }
    ];
  }
}
