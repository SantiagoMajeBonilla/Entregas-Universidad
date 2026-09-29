import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public marca: string = 'Clínica Vitalis';

  public opciones = [
    { texto: 'Promociones', enlace: '#promociones' },
    { texto: 'Nuestros médicos', enlace: '#medicos' },
    { texto: 'Registro', enlace: '#registro' },
    { texto: 'Productos', enlace: '#productos' }
  ];
}
