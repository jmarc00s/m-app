import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListagemConsultorioResolver } from './listagem-consultorios/listagem-consultorios.resolver';
import { FormularioConsultorioComponent } from './formulario-consultorio/formulario-consultorio.component';
import { ListagemConsultoriosComponent } from './listagem-consultorios/listagem-consultorios.component';

const ROTAS: Routes = [
  {
    path: '',
    component: ListagemConsultoriosComponent,
    resolve: {
      consultorios: ListagemConsultorioResolver
    }
  },
  {
    path: 'new',
    component: FormularioConsultorioComponent
  },
  {
    path: ':id/editar',
    component: FormularioConsultorioComponent
  }
]

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(ROTAS)]
})
export class ConsultorioRoutesModule {}
