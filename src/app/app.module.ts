import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MeliAppRoutingModule } from './app.routing';
import { MeliAppComponent } from './app.component';
import { UICoreModule } from './ui-core/ui-core.module';
import { MLCoreModule } from './ml-core/ml-core.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [MeliAppComponent],
  imports: [BrowserModule, MeliAppRoutingModule, UICoreModule, MLCoreModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [MeliAppComponent]
})
export class MeliAppModule {}
