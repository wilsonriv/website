import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './header/jumbotron/jumbotron.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [ HomeComponent, HeaderComponent, JumbotronComponent],
  imports: [HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule { }
