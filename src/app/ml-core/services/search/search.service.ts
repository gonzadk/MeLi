import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {
  private searchItemsRoute: string = 'api/items?q=';

  constructor(private httpClient: HttpClient) {}

  searchItemsByQuery(value: string): Observable<any> {
    return this.httpClient.get(`${this.searchItemsRoute}${value}`);
  }
}
