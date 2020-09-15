import { MedicoHttpService } from './../shared/medico.service';
import { MedicoModel } from './../shared/medico.model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ListagemMedicosResolver implements Resolve<MedicoModel[]> {

  constructor(private _medicoService: MedicoHttpService){}

  resolve(): Observable<MedicoModel[]>  {
    return this._medicoService.buscarTodos();
  }

}
