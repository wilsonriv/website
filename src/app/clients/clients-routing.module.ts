import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsVerysComponent } from './clients-verys/clients-verys.component';
import { ClientsVertaforeComponent } from './clients-vertafore/clients-vertafore.component';
import { ClientsPwcComponent } from './clients-pwc/clients-pwc.component';
import { ClientsSenegenceComponent } from './clients-senegence/clients-senegence.component';
import { ClientsOptioncareComponent } from './clients-optioncare/clients-optioncare.component';
import { ClientsTechnossusComponent } from './clients-technossus/clients-technossus.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'clients', component: ClientsComponent, children: [
        { path: '', component: ClientsListComponent },
        { path: 'verys', component: ClientsVerysComponent },
        { path: 'vertafore', component: ClientsVertaforeComponent },
        { path: 'pwc', component: ClientsPwcComponent },
        { path: 'oc', component: ClientsOptioncareComponent },
        { path: 'senegence', component: ClientsSenegenceComponent },
        { path: 'technossus', component: ClientsTechnossusComponent }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
