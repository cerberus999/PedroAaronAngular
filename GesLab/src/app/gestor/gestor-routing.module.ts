import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { GestorComponent } from './gestor.component';
import { ListadoPacComponent } from './listado-pac/listado-pac.component';

const routes: Routes = [
  {
    path: "",
    component: GestorComponent,
    children:
    [
      {
        path: "registro_pacientes",
        component: ClientRegComponent
      },
      {
        path: "listado_pacientes",
        component: ListadoPacComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestorRoutingModule { }
