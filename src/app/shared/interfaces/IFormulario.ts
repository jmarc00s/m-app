import { FormGroup } from '@angular/forms';
import { OperacoesFormulario } from '../types/Formulario.types';


export interface IFormulario<T>{
    form: FormGroup;
    formularioInvalido: boolean;
    operacao: OperacoesFormulario;
    titulo: string;
    construirFormulario(): FormGroup;
    salvar(entidade: T): void;
    verificarETratarOperacao(id: number): void;
}
