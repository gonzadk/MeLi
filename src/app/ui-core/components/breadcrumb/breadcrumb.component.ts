import { Component, Input } from '@angular/core';

@Component({
  selector: 'uc-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() items: string[] = [];

  constructor() {}
}
