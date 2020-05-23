import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'clients', component: ClientsComponent }
  ])],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
