import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'MApp-formulario-padrao',
  templateUrl: './formulario-padrao.component.html',
  styleUrls: ['./formulario-padrao.component.scss']
})
export class FormularioPadraoComponent implements OnInit {

  @Input() titulo: string;
  @Input() tituloInformativo: string;
  @Input() rotaVoltarPara: string[];
  @Input() desabilitarBotaoSalvar: boolean;
  @Output() salvar = new EventEmitter<any>();


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  voltarPara(): void {
    if(this.rotaVoltarPara.length){

      this._router.navigate(this.rotaVoltarPara);
    }
  }

}
