import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() public properties: Record<string, any> = {
    checked: false,
    text: 'This is the checkbox component',
    hint: 'You can define hints for it as well',
  }
}
