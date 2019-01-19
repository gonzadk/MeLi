import { NgModule } from '@angular/core';
import { ItemComponent } from './item.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [ItemComponent],
  exports: [ItemComponent]
})
export class ItemModule {}
