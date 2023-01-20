import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() public properties: Record<string, any> = {
    label: 'Label',
    text: 'This is the text of info component',
  }
}
