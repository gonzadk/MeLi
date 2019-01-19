import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/search-results.model';

@Component({
  selector: 'ml-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Item;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClick(): void {
    this.click.emit();
  }
}
