import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'MApp-listagem-padrao',
  templateUrl: './listagem-padrao.component.html',
  styleUrls: ['./listagem-padrao.component.scss']
})
export class ListagemPadraoComponent implements OnInit {

  @Input() titulo: string;
  @Input() tituloBotao: string;
  @Output() headerClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {  }



}
