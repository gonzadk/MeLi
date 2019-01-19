import { Component, Input } from '@angular/core';
import { Item } from '../../models/search-results.model';

@Component({
  selector: 'ml-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Item;

  constructor() {}
}
