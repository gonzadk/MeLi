import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingComponent } from "./loading.component";

@NgModule({
  declarations: [LoadingComponent],
  imports: [BrowserModule],
  exports: [LoadingComponent]
})
export class LoadingModule {}
