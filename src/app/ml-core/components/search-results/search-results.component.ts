import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item, SearchResults } from '../../models/search-results.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ml-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() placeholder = '';

  isLoading: boolean;
  searchResults: SearchResults = <SearchResults>{};

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => this.searchItemsByQuery(params)
    );
  }

  onClick(item: Item): void {
    this.router.navigate(['items', item.id]);
  }

  private searchItemsByQuery(params: Params): void {
    this.isLoading = true;
    this.searchResults = <SearchResults>{};

    this.searchService.searchItemsByQuery(params.search)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        (searchResults: SearchResults) => this.searchResults = searchResults,
        error => console.warn(error) // TODO: implement an error handler
      );
  }
}
