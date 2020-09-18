import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const ROTAS: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(ROTAS)]
})
export class InicioRoutesModule {}
