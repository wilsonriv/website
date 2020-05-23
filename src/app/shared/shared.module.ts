import { NgModule } from '@angular/core';
import { ShortenPipe } from './shorten.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ShortenPipe ],
  imports: [ CommonModule ],
  exports: [ ShortenPipe, CommonModule ]
})
export class SharedModule {}
