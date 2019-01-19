import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './ml-core/components/product-details/product-details.component';
import { SearchResultsComponent } from './ml-core/components/search-results/search-results.component';

const routes: Routes = [
  { path: 'items', component: SearchResultsComponent },
  { path: 'items/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MeliAppRoutingModule { }
