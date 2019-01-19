import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item, SearchResults } from '../../models/search-results.model';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'ml-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() placeholder = '';

  item: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private searchService: SearchService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => this.searchItemById(params)
    );
  }

  private searchItemById(params: Params): void {
    this.searchService.searchItemById(params.id).subscribe(
      (item: Item) => this.item = item
    );
  }
}
