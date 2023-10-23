import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})

export class LoadingComponent {
  @Input() width = '32%';
  @Input() height = '10rem';
  @Input() count = '1';
}
