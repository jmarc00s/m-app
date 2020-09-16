import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'MApp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() desabilitarBotao: boolean;
  @Input() titulo: string;
  @Input() tituloBotao: string;
  @Output() botaoHeaderClick = new EventEmitter<any>();

  aoClicarBotaoHeader(): void {
    this.botaoHeaderClick.emit();
  }
}
