import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  // Modelo del formulario
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  password: string = '';
  genero: string = '';
  terminos: boolean = false;

  // Mensajes de error por campo
  errorNombre: string = '';
  errorApellido: string = '';
  errorCorreo: string = '';
  errorTelefono: string = '';
  errorFecha: string = '';
  errorPassword: string = '';
  errorGenero: string = '';
  errorTerminos: string = '';

  // Mensaje final de registro
  mensajeRegistro: string = '';
  mostrarMensaje: boolean = false;

  // ---------- Validaciones (se ejecutan al cambiar el foco: blur) ----------
  validarNombre(): boolean {
    if (this.nombre.trim().length < 2) {
      this.errorNombre = 'Ingresa un nombre válido.';
      return false;
    }
    this.errorNombre = '';
    return true;
  }

  validarApellido(): boolean {
    if (this.apellido.trim().length < 2) {
      this.errorApellido = 'Ingresa un apellido válido.';
      return false;
    }
    this.errorApellido = '';
    return true;
  }

  validarCorreo(): boolean {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(this.correo.trim())) {
      this.errorCorreo = 'Ingresa un correo electrónico válido.';
      return false;
    }
    this.errorCorreo = '';
    return true;
  }

  validarTelefono(): boolean {
    const patron = /^[0-9+\s-]{7,15}$/;
    if (!patron.test(this.telefono.trim())) {
      this.errorTelefono = 'Ingresa un teléfono válido.';
      return false;
    }
    this.errorTelefono = '';
    return true;
  }

  validarFecha(): boolean {
    if (!this.fechaNacimiento) {
      this.errorFecha = 'Selecciona tu fecha de nacimiento.';
      return false;
    }
    this.errorFecha = '';
    return true;
  }

  validarPassword(): boolean {
    if (this.password.length < 6) {
      this.errorPassword = 'La contraseña debe tener al menos 6 caracteres.';
      return false;
    }
    this.errorPassword = '';
    return true;
  }

  validarGenero(): boolean {
    if (!this.genero) {
      this.errorGenero = 'Selecciona una opción.';
      return false;
    }
    this.errorGenero = '';
    return true;
  }

  validarTerminos(): boolean {
    if (!this.terminos) {
      this.errorTerminos = 'Debes aceptar los términos para continuar.';
      return false;
    }
    this.errorTerminos = '';
    return true;
  }

  // ---------- Validación completa al dar clic en "Registrar" ----------
  registrar(): void {
    const validaciones = [
      this.validarNombre(),
      this.validarApellido(),
      this.validarCorreo(),
      this.validarTelefono(),
      this.validarFecha(),
      this.validarPassword(),
      this.validarGenero(),
      this.validarTerminos()
    ];

    const esValido = validaciones.every(v => v === true);

    if (esValido) {
      this.mensajeRegistro = `¡Registro exitoso! Enviamos un código de confirmación a ${this.correo}. Revisa tu bandeja de entrada para validar tu cuenta.`;
      this.mostrarMensaje = true;
      this.resetFormulario();
    } else {
      this.mostrarMensaje = false;
    }
  }

  private resetFormulario(): void {
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.telefono = '';
    this.fechaNacimiento = '';
    this.password = '';
    this.genero = '';
    this.terminos = false;
  }
}
