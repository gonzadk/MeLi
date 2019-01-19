import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SearchBarModule } from '../../../ui-core/components/search-bar/search-bar.module';

@NgModule({
  imports: [SearchBarModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
