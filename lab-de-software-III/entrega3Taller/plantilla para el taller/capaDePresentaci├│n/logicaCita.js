const formCitas = document.getElementById("formCitas");
const tablaCitas = document.getElementById("tablaCitas");
const btnAgregarCita = document.getElementById("btnAgregarCita");

// Actividad 2: compara dos horas "HH:MM" y valida que la hora de fin
// sea mayor a la hora de inicio.
function horaFinEsMayorQueInicio(horaInicio, horaFin) {
  if (!horaInicio || !horaFin) return false;
  const [hIniH, hIniM] = horaInicio.split(":").map(Number);
  const [hFinH, hFinM] = horaFin.split(":").map(Number);
  const minutosInicio = hIniH * 60 + hIniM;
  const minutosFin = hFinH * 60 + hFinM;
  return minutosFin > minutosInicio;
}

// habilita/deshabilita el botón según la validez del formulario
// ("change" cubre los <select>, que no siempre disparan "input")
function actualizarEstadoBotonCita() {
  const horaInicio = document.getElementById("horaInicio").value;
  const horaFin = document.getElementById("horaFin").value;
  const horasValidas = !horaInicio || !horaFin || horaFinEsMayorQueInicio(horaInicio, horaFin);

  btnAgregarCita.disabled = !formCitas.checkValidity() || !horasValidas;
}
formCitas.addEventListener("input", actualizarEstadoBotonCita);
formCitas.addEventListener("change", actualizarEstadoBotonCita);

formCitas.addEventListener("submit", (e) => {
  e.preventDefault();
 
  const fecha = document.getElementById("fecha").value;
  const horaInicio = document.getElementById("horaInicio").value;
  const horaFin = document.getElementById("horaFin").value;

  const medicoSelect = document.getElementById("medicoSelect");
  const pacienteSelect = document.getElementById("pacienteSelect");

  const medicoId = parseInt(medicoSelect.value); 
  const pacienteId = parseInt(pacienteSelect.value); 

  console.log("Datos para registrar cita:", { fecha, horaInicio, horaFin, medicoId, pacienteId });

  // Actividad 2: validar en la vista antes de llamar a la fachada
  if (!horaFinEsMayorQueInicio(horaInicio, horaFin)) {
    mostrarNotificacion("La hora de fin debe ser mayor a la hora de inicio", "error");
    return;
  }
  
  try {
    const cita = gestionarCitas.registrarCita(fecha, horaInicio, horaFin, medicoId, pacienteId);
    console.log("Cita registrada:", cita);
    // mostrar en tabla
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${cita.fecha}</td>
      <td>${cita.horaInicio}</td>
      <td>${cita.horaFin}</td>
      <td>${cita.medico.nombres} ${cita.medico.apellidos}</td>
      <td>${cita.paciente.nombres} ${cita.paciente.apellidos}</td>
    `;
    tablaCitas.appendChild(fila);

    formCitas.reset();
    btnAgregarCita.disabled = true;

    mostrarNotificacion("Cita registrada con éxito");
  } catch (error) {
    mostrarNotificacion(error.message, "error");
  }
});
