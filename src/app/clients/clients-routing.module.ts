import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsVerysComponent } from './clients-verys/clients-verys.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'clients', component: ClientsComponent, children: [
      { path: '', component: ClientsListComponent },
      { path: 'verys', component: ClientsVerysComponent }
    ] }
  ])],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
