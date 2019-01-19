import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, SearchResults } from '../../models/search-results.model';

@Injectable()
export class SearchService {
  private searchItemsRoute: string = 'api/items?q=';
  private searchItemByIdRoute: string = 'api/items/';

  constructor(private httpClient: HttpClient) {}

  searchItemById(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.searchItemByIdRoute}${id}`);
  }

  searchItemsByQuery(value: string): Observable<SearchResults> {
    return this.httpClient.get<SearchResults>(`${this.searchItemsRoute}${value}`);
  }
}
