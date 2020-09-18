import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutesModule } from './inicio.routes.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [ CommonModule, InicioRoutesModule ]
})
export class InicioModule {}
