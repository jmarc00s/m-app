import { ConsultorioModel } from './consultorio.model';
import { HttpBaseService } from '../../../shared/services/http-base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioHttpService extends HttpBaseService<ConsultorioModel>{
    constructor(protected http: HttpClient ){
      super(http, 'api/consultorio')
    }
}
