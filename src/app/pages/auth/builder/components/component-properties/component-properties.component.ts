import { Component, Input } from '@angular/core'
import { ComponentClickEvent } from '../components-tree/components-tree.component'

@Component({
  selector: 'app-component-properties',
  templateUrl: './component-properties.component.html',
  styleUrls: ['./component-properties.component.scss']
})
export class ComponentPropertiesComponent {
  @Input() public selectedComponent?: ComponentClickEvent

  public get componentHasProperties() {
    return this.selectedComponent && Object.keys(this.selectedComponent.properties ?? {}).length
  }
}
