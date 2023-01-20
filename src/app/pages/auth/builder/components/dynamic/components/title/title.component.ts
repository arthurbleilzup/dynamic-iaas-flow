import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() public properties: Record<string, any> = {
    title: 'This is the title component',
    description: 'You can define a description for it as well',
  }
}
