import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchResultsComponent } from './search-results.component';
import { BreadcrumbModule } from '../../../ui-core/components/breadcrumb/breadcrumb.module';
import { ItemModule } from '../item/item.module';

@NgModule({
  imports: [BreadcrumbModule, ItemModule, BrowserModule],
  declarations: [SearchResultsComponent]
})
export class SearchResultsModule {}
