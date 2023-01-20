import { Component, Input } from '@angular/core';
import { Screen } from 'src/app/models/screen'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public children: Screen.Component[] = []
}
