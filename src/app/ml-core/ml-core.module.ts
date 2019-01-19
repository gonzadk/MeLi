import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';
import { ItemDetailsModule } from './components/item-details/item-details.module';
import { SearchResultsModule } from './components/search-results/search-results.module';
import { SearchService } from './services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemModule } from './components/item/item.module';

@NgModule({
  imports: [HttpClientModule],
  exports: [HeaderModule, ItemDetailsModule, SearchResultsModule, ItemModule],
  providers: [SearchService]
})
export class MLCoreModule {}
