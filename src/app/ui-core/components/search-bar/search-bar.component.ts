import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() placeholder = '';
  @Input() inputValue: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSubmit(): void {
    this.search.emit(this.inputValue);
  }
}
