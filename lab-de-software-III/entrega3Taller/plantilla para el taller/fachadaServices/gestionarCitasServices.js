class GestionarCitas {
  constructor(medicoRepo, pacienteRepo, citaRepo) {
    this.medicoRepo = medicoRepo;
    this.pacienteRepo = pacienteRepo;
    this.citaRepo = citaRepo;
  }
  registrarCita(fecha, horaInicio, horaFin, idMedico, idPaciente) {
    // Actividad 2: validar que la hora de fin sea mayor a la hora de inicio.
    // Se valida aquí (además de en la vista) para proteger la regla de negocio
    // sin depender de que la capa de presentación la aplique correctamente.
    if (!this.horaFinEsMayor(horaInicio, horaFin)) {
      throw new Error("La hora de fin debe ser mayor a la hora de inicio");
    }

    const id = this.citaRepo.siguienteId();
    const medico = this.medicoRepo.buscarPorId(idMedico);
    if (!medico) {
      throw new Error("Medico no encontrado");
    }
    const paciente = this.pacienteRepo.buscarPorId(idPaciente);
    if (!paciente) {
      throw new Error("Paciente no encontrado");
    }
    
    const cita = new Cita(id, fecha, horaInicio, horaFin, medico, paciente);
    this.citaRepo.agregar(cita);
    return cita;
  }

  // Compara dos horas en formato "HH:MM" (el que entrega <input type="time">)
  horaFinEsMayor(horaInicio, horaFin) {
    if (!horaInicio || !horaFin) return false;
    const [hIniH, hIniM] = horaInicio.split(":").map(Number);
    const [hFinH, hFinM] = horaFin.split(":").map(Number);
    const minutosInicio = hIniH * 60 + hIniM;
    const minutosFin = hFinH * 60 + hFinM;
    return minutosFin > minutosInicio;
  }

  listarCitas() {
    return this.citaRepo.obtenerTodos();
  }

  buscarCita(id) {
    return this.citaRepo.buscarPorId(id);
  }
}
const gestionarCitas = new GestionarCitas(medicoRepo, pacienteRepo, citaRepo);
