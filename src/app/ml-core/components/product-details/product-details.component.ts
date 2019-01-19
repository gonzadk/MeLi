import { Component, Input } from '@angular/core';

@Component({
  selector: 'ml-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() placeholder = '';
}
