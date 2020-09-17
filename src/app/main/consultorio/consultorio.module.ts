import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './../../layout/layout.module';
import { ListagemConsultorioResolver } from './listagem-consultorios/listagem-consultorios.resolver';
import { FormularioConsultorioComponent } from './formulario-consultorio/formulario-consultorio.component';
import { ListagemConsultoriosComponent } from './listagem-consultorios/listagem-consultorios.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultorioRoutesModule } from './consultorio.routes.module';

@NgModule({
  declarations: [ListagemConsultoriosComponent, FormularioConsultorioComponent],
  imports: [
      CommonModule,
      ConsultorioRoutesModule,
      SharedModule,
      LayoutModule,
      RouterModule,
      ReactiveFormsModule
    ],
  providers: [ListagemConsultorioResolver]
})
export class ConsultorioModule {}
