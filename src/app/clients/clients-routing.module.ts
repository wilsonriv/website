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
import { ClientsGlidewellComponent } from './clients-glidewell/clients-glidewell.component';
import { GLIDEWELL, VERYS, VERTAFORE, PWC, OPTION_CARE, SENEGENCE, TECHNOSSUS, BIORAD, DIGNITY_HEALTH, AMARE_GLOBAL, TEGA_TECHNOLOGIES, WIND_TELECOM } from './clients.constants';
import { ClientsBioradComponent } from './clients-biorad/clients-biorad.component';
import { ClientsDignityhealthComponent } from './clients-dignityhealth/clients-dignityhealth.component';
import { ClientsAmareglobalComponent } from './clients-amareglobal/clients-amareglobal.component';
import { ClientsTegatechnologiesComponent } from './clients-tegatechnologies/clients-tegatechnologies.component';
import { ClientsWindtelecomComponent } from './clients-windtelecom/clients-windtelecom.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'clients', component: ClientsComponent, children: [
        { path: '', component: ClientsListComponent },
        { path: VERYS, component: ClientsVerysComponent },
        { path: VERTAFORE, component: ClientsVertaforeComponent },
        { path: PWC, component: ClientsPwcComponent },
        { path: OPTION_CARE, component: ClientsOptioncareComponent },
        { path: SENEGENCE, component: ClientsSenegenceComponent },
        { path: TECHNOSSUS, component: ClientsTechnossusComponent },
        { path: GLIDEWELL, component: ClientsGlidewellComponent },
        { path: BIORAD, component: ClientsBioradComponent },
        { path: DIGNITY_HEALTH, component: ClientsDignityhealthComponent },
        { path: AMARE_GLOBAL, component: ClientsAmareglobalComponent },
        { path: TEGA_TECHNOLOGIES, component: ClientsTegatechnologiesComponent },
        { path: WIND_TELECOM, component: ClientsWindtelecomComponent }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
