import { MedicoModel } from './../../medico/shared/medico.model';
import { ConsultorioModel } from './consultorio.model';


export class MedicoConsultorio {
  consultorioId: number;
  consultorio: ConsultorioModel;
  medicoId: number;
  medico: MedicoModel
}
