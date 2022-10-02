import { DatosMaestrosDTO } from './DatosMaestrosDTO';

export class RutinaDTO {
  idTipoDeMedicamento: number;
  tipoDeMedicamento: DatosMaestrosDTO;
  idMedicamento: number;
  medicamento: DatosMaestrosDTO;
  cantidadPorToma: number;
  intervalo: number;
  idTipoDeIntervalo: number;
  tipoDeIntervalo: DatosMaestrosDTO;
  duracion: number;
  idTipoDuracion: number;
  tipoDuracion: DatosMaestrosDTO;
  fechaInicio: Date;
}
