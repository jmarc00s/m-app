import { IListagem } from './../../../shared/interfaces/IListagem';
import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoHttpService } from './../shared/medico.service';
import { MedicoModel } from './../shared/medico.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listagem-medicos',
  templateUrl: './listagem-medicos.component.html',
  styleUrls: ['./listagem-medicos.component.scss']
})
export class ListagemMedicosComponent implements OnInit, IListagem<MedicoModel> {

  listaEntidades: MedicoModel[] = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _medicoHttpService: MedicoHttpService,
              private _toasterService: ToastrService,
              private _router: Router) { }

  ngOnInit(): void {
    this.listaEntidades = this.buscarDadosResolver();
  }

  buscarDadosResolver(): MedicoModel[] {
    return this._activatedRoute.snapshot.data.medicos;
  }

  removerEntidade(entidade: MedicoModel): void {
    if(confirm(`Deseja remover o médico ${entidade.nome}?`)){
      this._medicoHttpService.remover(entidade.id)
          .pipe(take(1))
          .subscribe(() => this.aoRemoverMedico(entidade),
                     () => this._toasterService.error('Não foi possível remover médico!', '', { timeOut: 3000}));
    }
  }

  removerEntidadeDaLista(entidade: MedicoModel): void {
    this.listaEntidades.splice(this.listaEntidades.indexOf(entidade), 1);
  }


  aoRemoverMedico(medico: MedicoModel): void {
    this._toasterService.success('Médico removido com sucesso!', '', { timeOut: 3000});
    this.removerEntidadeDaLista(medico);
  }

  adicionar(): void {
    this._router.navigate(['medicos', 'new'])
  }

}
