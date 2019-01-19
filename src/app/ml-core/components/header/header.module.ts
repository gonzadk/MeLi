import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SearchBarModule } from '../../../ui-core/components/search-bar/search-bar.module';

@NgModule({
  imports: [SearchBarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
