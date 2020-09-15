import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROTAS: Routes = [
  {
    path: 'medicos',
    loadChildren: () => import('./medico/medico.module').then(c => c.MedicoModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROTAS)]
})
export class MainRoutesModule {}
