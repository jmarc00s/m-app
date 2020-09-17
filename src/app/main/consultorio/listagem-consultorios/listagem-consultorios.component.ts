import { ConsultorioModel } from './../shared/consultorio.model';
import { IListagem } from './../../../shared/interfaces/IListagem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultorioHttpService } from '../shared/consultorio-http.service';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'MApp-listagem-consultorios',
  templateUrl: './listagem-consultorios.component.html',
  styleUrls: ['./listagem-consultorios.component.scss']
})
export class ListagemConsultoriosComponent implements OnInit, IListagem<ConsultorioModel> {

  listaEntidades: ConsultorioModel[];


  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _consultorioHttpService: ConsultorioHttpService,
              private _toastrService: ToastrService) { }

  ngOnInit(): void {
    this.listaEntidades = this.buscarDadosResolver();
  }

  buscarDadosResolver(): ConsultorioModel[] {
    return this._activatedRoute.snapshot.data.consultorios;
  }

  removerEntidade(entidade: ConsultorioModel): void {
    if(confirm(`Deseja remover o consultorio ${entidade.nome}?`)){
      this._consultorioHttpService
            .remover(entidade.id)
            .pipe(take(1))
            .subscribe(() => this._aoRemoverEntidade(entidade),
                        () => this._toastrService.error('Não foi possível remover consultório!', '', { timeOut: 3000}))
    }
  }

  removerEntidadeDaLista(entidade: ConsultorioModel): void {
    this.listaEntidades.splice(this.listaEntidades.indexOf(entidade), 1);
  }

  adicionar(): void {
    this._router.navigate(['consultorios', 'new']);
  }
  private _aoRemoverEntidade(entidade: ConsultorioModel): void {
    this._toastrService.success('Consultório removido com sucesso!', 'Sucesso', {timeOut: 3000});
    this.removerEntidadeDaLista(entidade);
  }
}
