import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';
import { CertificationsRoutingModule } from '../certifications/certifications-routing.module';

@NgModule({
  declarations: [ HeaderComponent, JumbotronComponent ],
  imports: [ RouterModule, CertificationsRoutingModule ],
  exports: [
    HeaderComponent,
    JumbotronComponent
  ]
})
export class HeaderModule {}
