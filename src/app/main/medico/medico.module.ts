import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MedicoRoutesModule } from './medico.routes.module';
import { ListagemMedicosComponent } from './listagem-medicos/listagem-medicos.component';
import { ListagemMedicosResolver } from './listagem-medicos/listagem-medicos.resolver';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormularioMedicoComponent } from './formulario-medico/formulario-medico.component';
import { CurrencyMaskConfig, NgxCurrencyModule } from 'ngx-currency';

const configCurrencyMask: CurrencyMaskConfig = {
  align: 'left',
  precision: 2,
  decimal: ',',
  thousands: '.',
  allowNegative: false,
  allowZero: true,
  prefix: 'R$',
  suffix: '',
  nullable: true
}

@NgModule({
  declarations: [ListagemMedicosComponent, FormularioMedicoComponent],
  imports: [
    CommonModule,
    MedicoRoutesModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(configCurrencyMask)
  ],
  providers:[ListagemMedicosResolver]
})
export class MedicoModule { }
