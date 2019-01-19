import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';
import { ProductDetailsModule } from './components/product-details/product-details.module';
import { SearchResultsModule } from './components/search-results/search-results.module';
import { SearchService } from './services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemModule } from './components/item/item.module';

@NgModule({
  imports: [HttpClientModule],
  exports: [HeaderModule, ProductDetailsModule, SearchResultsModule, ItemModule],
  providers: [SearchService]
})
export class MLCoreModule {}
