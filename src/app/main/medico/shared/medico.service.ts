import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpBaseService } from '../../../shared/services/http-base.service';
import { MedicoModel } from './medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoHttpService extends HttpBaseService<MedicoModel> {

  constructor(protected http: HttpClient) {
    super(http, 'api/medico');
  }
}
