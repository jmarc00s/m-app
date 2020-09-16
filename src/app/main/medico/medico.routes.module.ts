import { FormularioMedicoComponent } from './formulario-medico/formulario-medico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemMedicosComponent } from './listagem-medicos/listagem-medicos.component';
import { ListagemMedicosResolver } from './listagem-medicos/listagem-medicos.resolver';

const ROTAS: Routes = [
  {
    path: '',
    component: ListagemMedicosComponent,
    resolve: {
      medicos: ListagemMedicosResolver
    }
  },
  {
    path: 'new',
    component: FormularioMedicoComponent
  },

  {
    path: ':id/editar',
    component: FormularioMedicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROTAS)],
  exports: [RouterModule]
})
export class MedicoRoutesModule { }
