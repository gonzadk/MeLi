import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchResults } from '../../models/search-results.model';

@Component({
  selector: 'ml-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() placeholder = '';

  searchResults: SearchResults = <SearchResults>{};

  constructor(private searchService: SearchService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => this.searchItemsByQuery(params)
    );
  }

  private searchItemsByQuery(params: Params): void {
    this.searchService.searchItemsByQuery(params.search).subscribe(
      (searchResults: SearchResults) => this.searchResults = searchResults
    );
  }
}
