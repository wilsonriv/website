import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ClientsModule } from './clients/clients.module';
import { CertificationsModule } from './certifications/certifications.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HeaderModule,
    ClientsModule,
    RouterModule.forRoot([{ path: '', redirectTo: '/clients', pathMatch: 'full' }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
