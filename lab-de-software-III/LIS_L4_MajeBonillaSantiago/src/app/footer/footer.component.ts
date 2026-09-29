import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public anio: number = 2026;

  public enlaces = [
    { texto: 'Promociones', ruta: '#promociones' },
    { texto: 'Nuestros médicos', ruta: '#medicos' },
    { texto: 'Registro', ruta: '#registro' },
    { texto: 'Productos', ruta: '#productos' }
  ];
}
