import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicoHttpService } from './../shared/medico.service';
import { MedicoModel } from './../shared/medico.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listagem-medicos',
  templateUrl: './listagem-medicos.component.html',
  styleUrls: ['./listagem-medicos.component.scss']
})
export class ListagemMedicosComponent implements OnInit {

  medicos: MedicoModel[] = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _medicoHttpService: MedicoHttpService,
              private _toasterService: ToastrService) { }

  ngOnInit(): void {
    this.medicos = this.buscarDadosRota();
  }

  buscarDadosRota(): MedicoModel[]{
    return this._activatedRoute.snapshot.data.medicos;
  }

  removerMedico(medico: MedicoModel): void {
    if(confirm(`Deseja remover o médico ${medico.nome}?`)){
      this._medicoHttpService.remover(medico.id)
          .pipe(take(1))
          .subscribe(() => this.aoRemoverMedico(medico),
                     () => this._toasterService.error('Não foi possível remover médico!', '', { timeOut: 3000}));
    }
  }

  aoRemoverMedico(medico: MedicoModel): void {
    this._toasterService.success('Médico removido com sucesso!', '', { timeOut: 3000});
    this._removerMedicoDaLista(medico);
  }

  private _removerMedicoDaLista(medico: MedicoModel): void {
    this.medicos.splice(this.medicos.indexOf(medico), 1);
  }

}
