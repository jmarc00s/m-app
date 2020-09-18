import { Observable } from 'rxjs';
import { ConsultorioModel } from './consultorio.model';
import { HttpBaseService } from '../../../shared/services/http-base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VinculoMedicoConsultorioModel } from './vinculo-medico-consultorio.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioHttpService extends HttpBaseService<ConsultorioModel>{
    private _rotaApi = 'api/consultorio';

    constructor(protected http: HttpClient ){
      super(http, 'api/consultorio')
    }

    realizarOperacaoVinculo(viewModel: VinculoMedicoConsultorioModel): Observable<ConsultorioModel>{
        return this._http.post<ConsultorioModel>(environment.urlApi + this._rotaApi + '/realizarOperacaoVinculo', viewModel);
    }

}
