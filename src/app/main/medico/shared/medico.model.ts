import { BaseModel } from './../../../shared/models/base.model';

export class MedicoModel extends BaseModel {
    crm: string;
    nome: string;
    telefone: string;
    valorConsulta: number;
}
