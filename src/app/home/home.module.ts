import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './header/jumbotron/jumbotron.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShortenPipe } from '../shorten.pipe';



@NgModule({
  declarations: [ HomeComponent, HeaderComponent, JumbotronComponent, ShortenPipe],
  imports: [HomeRoutingModule, CommonModule],
  exports: [HomeComponent]
})
export class HomeModule { }
