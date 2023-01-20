import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() public properties: Record<string, any> = {
    text: 'This is the label component',
  }
}
