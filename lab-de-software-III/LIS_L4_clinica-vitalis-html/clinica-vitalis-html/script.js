// ---------- SECCIÓN 2: descripciones de especialidades ----------
  const descripciones = {
    neural: "La Terapia Neural regula el sistema nervioso mediante la aplicación de anestésicos locales en puntos específicos, ayudando a aliviar dolores crónicos y bloqueos energéticos del cuerpo.",
    quiropraxia: "La Quiropraxia se enfoca en el diagnóstico y tratamiento manual de trastornos de la columna vertebral y el sistema musculoesquelético, mejorando la movilidad y aliviando el dolor.",
    fisioterapia: "La Fisioterapia utiliza técnicas físicas como ejercicio terapéutico, electroterapia y masajes para recuperar la movilidad y funcionalidad tras lesiones o cirugías.",
    nutricion: "La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados para prevenir y tratar enfermedades, mejorando la calidad de vida a través de hábitos saludables."
  };

  const items = document.querySelectorAll('#listaEspecialidades .list-group-item');
  const descripcionBox = document.getElementById('descripcionEspecialidad');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active-specialty'));
      item.classList.add('active-specialty');
      const key = item.getAttribute('data-especialidad');
      descripcionBox.textContent = descripciones[key];
    });
  });

  // ---------- SECCIÓN 3: validación del formulario ----------
  function validarNombre() {
    const campo = document.getElementById('nombre');
    const error = document.getElementById('errorNombre');
    if (campo.value.trim().length < 2) {
      error.textContent = 'Ingresa un nombre válido.';
      campo.classList.add('is-invalid');
      return false;
    }
    error.textContent = '';
    campo.classList.remove('is-invalid');
    return true;
  }

  function validarApellido() {
    const campo = document.getElementById('apellido');
    const error = document.getElementById('errorApellido');
    if (campo.value.trim().length < 2) {
      error.textContent = 'Ingresa un apellido válido.';
      campo.classList.add('is-invalid');
      return false;
    }
    error.textContent = '';
    campo.classList.remove('is-invalid');
    return true;
  }

  function validarCorreo() {
    const campo = document.getElementById('correo');
    const error = document.getElementById('errorCorreo');
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(campo.value.trim())) {
      error.textContent = 'Ingresa un correo electrónico válido.';
      campo.classList.add('is-invalid');
      return false;
    }
    error.textContent = '';
    campo.classList.remove('is-invalid');
    return true;
  }

  function validarTelefono() {
    const campo = document.getElementById('telefono');
    const error = document.getElementById('errorTelefono');
    const patron = /^[0-9+\s-]{7,15}$/;
    if (!patron.test(campo.value.trim())) {
      error.textContent = 'Ingresa un teléfono válido.';
      campo.classList.add('is-invalid');
      return false;
    }
    error.textContent = '';
    campo.classList.remove('is-invalid');
    return true;
  }

  function validarFecha() {
    const campo = document.getElementById('fechaNacimiento');
    const error = document.getElementById('errorFecha');
    if (!campo.value) {
      error.textContent = 'Selecciona tu fecha de nacimiento.';
      campo.classList.add('is-invalid');
      return false;
    }
    error.textContent = '';
    campo.classList.remove('is-invalid');
    return true;
  }

  function validarPassword() {
    const campo = document.getElementById('password');
    const error = document.getElementById('errorPassword');
    if (campo.value.length < 6) {
      error.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      campo.classList.add('is-invalid');
      return false;
    }
    error.textContent = '';
    campo.classList.remove('is-invalid');
    return true;
  }

  function validarGenero() {
    const error = document.getElementById('errorGenero');
    const seleccionado = document.querySelector('input[name="genero"]:checked');
    if (!seleccionado) {
      error.textContent = 'Selecciona una opción.';
      return false;
    }
    error.textContent = '';
    return true;
  }

  function validarTerminos() {
    const campo = document.getElementById('terminos');
    const error = document.getElementById('errorTerminos');
    if (!campo.checked) {
      error.textContent = 'Debes aceptar los términos para continuar.';
      return false;
    }
    error.textContent = '';
    return true;
  }

  // Validar al cambiar el foco (blur) entre inputs
  document.getElementById('nombre').addEventListener('blur', validarNombre);
  document.getElementById('apellido').addEventListener('blur', validarApellido);
  document.getElementById('correo').addEventListener('blur', validarCorreo);
  document.getElementById('telefono').addEventListener('blur', validarTelefono);
  document.getElementById('fechaNacimiento').addEventListener('blur', validarFecha);
  document.getElementById('password').addEventListener('blur', validarPassword);
  document.querySelectorAll('input[name="genero"]').forEach(r => r.addEventListener('change', validarGenero));
  document.getElementById('terminos').addEventListener('change', validarTerminos);

  // Validar todo al dar clic en "Registrar"
  document.getElementById('btnRegistrar').addEventListener('click', () => {
    const valido =
      validarNombre() &
      validarApellido() &
      validarCorreo() &
      validarTelefono() &
      validarFecha() &
      validarPassword() &
      validarGenero() &
      validarTerminos();

    const mensaje = document.getElementById('mensajeRegistro');
    if (valido) {
      const correo = document.getElementById('correo').value;
      mensaje.textContent = `¡Registro exitoso! Enviamos un código de confirmación a ${correo}. Revisa tu bandeja de entrada para validar tu cuenta.`;
      mensaje.style.display = 'block';
      document.getElementById('formRegistro').reset();
      document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    } else {
      mensaje.style.display = 'none';
    }
  });
