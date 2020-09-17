import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioPadraoComponent } from './components/formulario-padrao/formulario-padrao.component';
import { ListagemPadraoComponent } from './components/listagem-padrao/listagem-padrao.component';


@NgModule({
  imports: [ CommonModule, LayoutModule ],
  declarations: [FormularioPadraoComponent, ListagemPadraoComponent],
  exports: [FormularioPadraoComponent, ListagemPadraoComponent]
})
export class SharedModule {}
