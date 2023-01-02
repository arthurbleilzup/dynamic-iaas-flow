import { Component, Input } from '@angular/core'
import { Screen } from 'src/app/models/screen'

@Component({
  selector: 'app-screens-list',
  templateUrl: './screens-list.component.html',
  styleUrls: ['./screens-list.component.scss']
})
export class ScreensListComponent {
  @Input() public screens: Screen[] = []
}
