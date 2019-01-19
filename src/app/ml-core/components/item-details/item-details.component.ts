import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  Item,
  ItemCondition,
  ItemConditionTranslated, ItemPrice,
  ItemResults
} from '../../models/search-results.model';
import { SearchService } from '../../services/search/search.service';
import { CurrencyPipe } from '@angular/common';
import * as _ from 'lodash';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ml-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() placeholder = '';

  decimals: string;
  descriptionTitle: string = 'Descriptción del producto';
  item: Item;
  itemCondition: string;
  isLoading: boolean;
  price: string;

  constructor(private activatedRoute: ActivatedRoute,
              private currencyPipe: CurrencyPipe,
              private searchService: SearchService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => this.searchItemById(params)
    );
  }

  private searchItemById(params: Params): void {
    this.isLoading = true;

    this.searchService.searchItemById(params.id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        (itemResults: ItemResults) => this.onSearchItemByIdSuccess(itemResults.item),
        error => console.warn(error) // TODO: implement an error handler
      );
  }

  private onSearchItemByIdSuccess(item: Item): void {
    const soldLabel = item.sold_quantity === 1 ? 'vendido' : 'vendidos';
    const condition = item.condition === ItemCondition.NEW
      ? ItemConditionTranslated.NEW
      : ItemConditionTranslated.USED; // TODO: A proper way for translations should be used here

    this.itemCondition = `${condition} - ${item.sold_quantity} ${soldLabel}`;
    [this.price, this.decimals] = this.getParsedPrice(item.price);
    this.item = item
  }

  private getParsedPrice(price: ItemPrice): any {
    const totalAmount = this.currencyPipe.transform(price.amount, (price.currency + ' '), true, '.2');
    const [amount, decimals] = _.split(totalAmount, '.');

    return [_.replace(amount, ',', '.'), decimals];
  }
}
