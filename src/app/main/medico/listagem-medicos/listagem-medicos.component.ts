import { MedicoModel } from './../shared/medico.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listagem-medicos',
  templateUrl: './listagem-medicos.component.html',
  styleUrls: ['./listagem-medicos.component.scss']
})
export class ListagemMedicosComponent implements OnInit {

  medicos: MedicoModel[] = [];

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.medicos = this.buscarDadosRota();
  }

  buscarDadosRota(): MedicoModel[]{
    return this._activatedRoute.snapshot.data.medicos;
  }

}
