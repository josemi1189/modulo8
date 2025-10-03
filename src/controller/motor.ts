import { pacientes } from "../assets/datos";
import { muestraDatosPacientes } from "../ui/ui";
import { Pacientes } from "../modelo";


export const principal = () => {
   
   let pediatria = obtenPacientesAsignadosAPediatria(pacientes);
   muestraDatosPacientes("pediatria", pediatria);

   let pediatriaMenor10 = obtenPacientesPediatriaMenorDe10(pacientes);
   muestraDatosPacientes("pediatriaMenor10", pediatriaMenor10);
}


// a) lista de paciente que están asignados a la especialidad de Pediatría
export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {   
   
   let pacientesPediatria:Pacientes[] = [];
   for ( let i = 0; i < pacientes.length; i++ ) {
      ( pacientes[i].especialidad === "Pediatra" ) && pacientesPediatria.push(pacientes[i]);
   }

   return pacientesPediatria;
};

// b) lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
export const obtenPacientesPediatriaMenorDe10 = (
  pacientes: Pacientes[]
): Pacientes[] => {   
   
   let pacientesPediatria:Pacientes[] = [];
   for ( let i = 0; i < pacientes.length; i++ ) {
      ( pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) && pacientesPediatria.push(pacientes[i]);
   }

   return pacientesPediatria;
};