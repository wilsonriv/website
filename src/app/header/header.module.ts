import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [ HeaderComponent, JumbotronComponent ],
  exports: [
    HeaderComponent,
    JumbotronComponent
  ]
})
export class HeaderModule {}
