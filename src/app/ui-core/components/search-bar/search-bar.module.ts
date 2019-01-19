import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from "./search-bar.component";

@NgModule({
  declarations: [SearchBarComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  exports: [SearchBarComponent]
})
export class SearchBarModule {}
