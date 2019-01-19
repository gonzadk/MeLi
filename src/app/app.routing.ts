import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './ml-core/components/item-details/item-details.component';
import { SearchResultsComponent } from './ml-core/components/search-results/search-results.component';

const routes: Routes = [
  { path: 'items', component: SearchResultsComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MeliAppRoutingModule { }
