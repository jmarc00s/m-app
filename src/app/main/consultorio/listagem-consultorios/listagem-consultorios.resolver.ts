import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultorioHttpService } from '../shared/consultorio-http.service';
import { ConsultorioModel } from './../shared/consultorio.model';

@Injectable()
export class ListagemConsultorioResolver implements Resolve<ConsultorioModel[]>{
  /**
   *
   */
  constructor(private _consultorioHttpService: ConsultorioHttpService) {

  }
  resolve(): Observable<ConsultorioModel[]> {
    return this._consultorioHttpService.buscarTodos();
  }

}
