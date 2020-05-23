import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CertificationsComponent } from './certifications.component';

@NgModule({
  imports: [ RouterModule.forChild([{ path: 'certifications', component: CertificationsComponent}])],
  exports: [ RouterModule ]
})
export class CertificationsRoutingModule { }
