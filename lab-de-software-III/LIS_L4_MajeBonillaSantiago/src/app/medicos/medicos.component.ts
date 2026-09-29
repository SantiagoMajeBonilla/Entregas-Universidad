import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Especialidad } from './especialidad';
import { Medico } from './medico';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {
  especialidades: Especialidad[] = [];
  medicos: Medico[] = [];

  especialidadActiva: string = '';
  descripcionActual: string = 'Selecciona una especialidad para ver su descripción.';

  ngOnInit(): void {
    this.especialidades = [
      {
        id: 'neural',
        nombre: 'Terapia neural',
        descripcion: 'La Terapia Neural regula el sistema nervioso mediante la aplicación de anestésicos locales en puntos específicos, ayudando a aliviar dolores crónicos y bloqueos energéticos del cuerpo.'
      },
      {
        id: 'quiropraxia',
        nombre: 'Quiropraxia',
        descripcion: 'La Quiropraxia se enfoca en el diagnóstico y tratamiento manual de trastornos de la columna vertebral y el sistema musculoesquelético, mejorando la movilidad y aliviando el dolor.'
      },
      {
        id: 'fisioterapia',
        nombre: 'Fisioterapia',
        descripcion: 'La Fisioterapia utiliza técnicas físicas como ejercicio terapéutico, electroterapia y masajes para recuperar la movilidad y funcionalidad tras lesiones o cirugías.'
      },
      {
        id: 'nutricion',
        nombre: 'Nutrición y Dietética Terapéutica',
        descripcion: 'La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados para prevenir y tratar enfermedades, mejorando la calidad de vida a través de hábitos saludables.'
      }
    ];

    this.medicos = [
      {
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Fisioterapia deportiva',
        imagen: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=280&fit=crop',
        descripcion: 'Comprometido con tu recuperación y tu regreso a la actividad física.'
      },
      {
        nombre: 'Dra. Catalina Sánchez',
        especialidad: 'Quiropraxia',
        imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=280&fit=crop',
        descripcion: 'La salud de tu columna es fundamental para tu bienestar diario.'
      },
      {
        nombre: 'Dr. Andrés Cardozo',
        especialidad: 'Nutrición y Dietética',
        imagen: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=280&fit=crop',
        descripcion: 'Un alimento sano alarga la vida y previene enfermedades.'
      },
      {
        nombre: 'Dra. Laura Gómez',
        especialidad: 'Terapia neural',
        imagen: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&h=280&fit=crop',
        descripcion: 'Tratamientos enfocados en el sistema nervioso y el dolor crónico.'
      }
    ];
  }

  // Funcionalidad para mostrar la descripción de la especialidad seleccionada
  seleccionarEspecialidad(especialidad: Especialidad): void {
    this.especialidadActiva = especialidad.id;
    this.descripcionActual = especialidad.descripcion;
  }
}
