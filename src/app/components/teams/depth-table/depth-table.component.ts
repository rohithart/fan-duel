import { Component, Input } from '@angular/core';
import { TeamDepth } from 'src/app/models/TeamDepth';

@Component({
  selector: 'app-depth-table',
  templateUrl: './depth-table.component.html',
  styleUrls: ['./depth-table.component.scss']
})
export class DepthTableComponent {
  @Input() depth!: TeamDepth;
}
