import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestorRoutingModule } from './gestor-routing.module';
import { GestorComponent } from './gestor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { ListadoPacComponent } from './listado-pac/listado-pac.component';


@NgModule({
  declarations: [
    GestorComponent,
    SidebarComponent,
    ClientRegComponent,
    ListadoPacComponent
  ],
  imports: [
    CommonModule,
    GestorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestorModule { }
