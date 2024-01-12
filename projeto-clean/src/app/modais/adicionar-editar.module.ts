import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarEditarMedicoComponent } from './adicionar-editar-medico/adicionar-editar-medico.component';
import { MaterialModule } from 'src/app/modules/material.module';



@NgModule({
  declarations: [
    AdicionarEditarMedicoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AdicionarEditarModule { }
