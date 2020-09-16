import { FormGroup } from '@angular/forms';


export interface IFormulario<T>{
    form: FormGroup;
    formularioInvalido: boolean;

    construirFormulario(): FormGroup;
    salvar(entidade: T): void;
}
