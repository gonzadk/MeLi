import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemResults, SearchResults } from '../../models/search-results.model';

@Injectable()
export class SearchService {
  private searchItemsRoute: string = 'api/items?q=';
  private searchItemByIdRoute: string = 'api/items/';

  constructor(private httpClient: HttpClient) {}

  searchItemById(id: string): Observable<ItemResults> {
    return this.httpClient.get<ItemResults>(`${this.searchItemByIdRoute}${id}`);
  }

  searchItemsByQuery(value: string): Observable<SearchResults> {
    return this.httpClient.get<SearchResults>(`${this.searchItemsRoute}${value}`);
  }
}
