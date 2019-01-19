import { Component, Input } from '@angular/core';

@Component({
  selector: 'uc-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() isLoading: boolean = false;

  constructor() {}
}
