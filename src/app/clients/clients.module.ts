import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsVerysComponent } from './clients-verys/clients-verys.component';
import { ClientsVertaforeComponent } from './clients-vertafore/clients-vertafore.component';
import { ClientsPwcComponent } from './clients-pwc/clients-pwc.component';
import { ClientsSenegenceComponent } from './clients-senegence/clients-senegence.component';
import { ClientsOptioncareComponent } from './clients-optioncare/clients-optioncare.component';
import { ClientsTechnossusComponent } from './clients-technossus/clients-technossus.component';
import { ClientsGlidewellComponent } from './clients-glidewell/clients-glidewell.component';

@NgModule({
  declarations: [ClientsComponent, ClientsListComponent, ClientsVerysComponent, ClientsVertaforeComponent, ClientsPwcComponent, ClientsSenegenceComponent, ClientsOptioncareComponent, ClientsTechnossusComponent, ClientsGlidewellComponent],
  imports: [
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
