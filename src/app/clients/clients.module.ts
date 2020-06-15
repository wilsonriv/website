import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsVerysComponent } from './clients-verys/clients-verys.component';
import { ClientsVertaforeComponent } from './clients-vertafore/clients-vertafore.component';

@NgModule({
  declarations: [ClientsComponent, ClientsListComponent, ClientsVerysComponent, ClientsVertaforeComponent],
  imports: [
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
