const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("medicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");

// habilita/deshabilita el botón según la validez del formulario
formMedico.addEventListener("input", () => {
  btnAgregarMedico.disabled = !formMedico.checkValidity();
});

formMedico.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombres = document.getElementById("nombresMedico").value;
  const apellidos = document.getElementById("apellidosMedico").value;

  // Nuevos atributos del médico (actividad 1)
  const especialidad = document.getElementById("especialidadMedico").value;
  const horarioAtencion = document.getElementById("horarioAtencionMedico").value;
  const aniosExperiencia = parseInt(document.getElementById("aniosExperienciaMedico").value);
  const bibliografia = document.getElementById("bibliografiaMedico").value;

  const medico = gestionarMedicos.registrarMedico(
    nombres,
    apellidos,
    especialidad,
    horarioAtencion,
    aniosExperiencia,
    bibliografia
  );
  console.log("Medico registrado:", medico);

  // actualizar select
  const option = document.createElement("option");
  option.value = medico.id;
  option.textContent = `${medico.nombres} ${medico.apellidos}`;
  medicoSelect.appendChild(option);

  formMedico.reset();
  btnAgregarMedico.disabled = true;

  mostrarNotificacion(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
});
