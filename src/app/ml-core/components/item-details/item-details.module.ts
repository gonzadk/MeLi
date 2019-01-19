import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';
import { ItemDetailsComponent } from './item-details.component';
import { LoadingModule } from '../../../ui-core/components/loading/loading.module';

@NgModule({
  imports: [BrowserModule, LoadingModule],
  declarations: [ItemDetailsComponent],
  providers: [CurrencyPipe]
})
export class ItemDetailsModule {}
