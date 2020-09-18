import { MedicoConsultorio } from './medico-consultorio.model';
import { BaseModel } from './../../../shared/models/base.model';

export class ConsultorioModel extends BaseModel{
  constructor(){
    super();
    this.medicosConsultorios = [];
  }
  nome: string;
  telefone: string;
  endereco: string;
  medicosConsultorios: MedicoConsultorio[];
}
