import { Component, Input } from '@angular/core';
import { Screen } from 'src/app/models/screen'

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() public children: Screen.Component[] = []
}
