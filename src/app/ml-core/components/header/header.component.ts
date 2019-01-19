import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'ml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputValue: string = '';
  placeholder: string = 'Nunca dejes de buscar';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => this.inputValue = params.search
    );
  }

  onSearch(value): void {
    this.router.navigate(['items'], { queryParams: { search: value }});
  }
}
