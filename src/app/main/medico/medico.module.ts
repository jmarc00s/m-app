import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MedicoRoutesModule } from './medico.routes.module';
import { ListagemMedicosComponent } from './listagem-medicos/listagem-medicos.component';
import { ListagemMedicosResolver } from './listagem-medicos/listagem-medicos.resolver';


@NgModule({
  declarations: [ListagemMedicosComponent],
  imports: [
    CommonModule,
    MedicoRoutesModule,
    SharedModule
  ],
  providers:[ListagemMedicosResolver]
})
export class MedicoModule { }
