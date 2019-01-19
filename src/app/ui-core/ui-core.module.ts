import { NgModule } from '@angular/core';
import { SearchBarModule } from './components/search-bar/search-bar.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';

@NgModule({
  exports: [BreadcrumbModule, SearchBarModule]
})
export class UICoreModule {}
