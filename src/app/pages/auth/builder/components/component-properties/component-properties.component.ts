import { Component, Input } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { ComponentClickEvent } from '../components-tree/components-tree.component'

@Component({
  selector: 'app-component-properties',
  templateUrl: './component-properties.component.html',
  styleUrls: ['./component-properties.component.scss']
})
export class ComponentPropertiesComponent {
  private _selectedComponent?: ComponentClickEvent | null
  public propertiesForm?: UntypedFormGroup = undefined

  @Input() public set selectedComponent(value: ComponentClickEvent | null | undefined) {
    this._selectedComponent = value

    if (this._selectedComponent && this._selectedComponent.info.properties) {
      const defaultTypeValue: Record<string, any> = {
        'text': '',
        'checkbox': false,
      }

      let group = {}
      this._selectedComponent?.info.properties?.map(p => {
        const propValue = this._selectedComponent?.properties
          ? this._selectedComponent?.properties[p.valueProp]
          : defaultTypeValue[p.valueProp]

        return {
          [p.valueProp]: [
            propValue,
            p.required ? [Validators.required] : []
          ]
        }
      }).forEach(control => {
        group = {
          ...group,
          ...control,
        }
      })

      this.propertiesForm = this.formBuilder.group(group)
    }
  }

  public get selectedComponent() {
    return this._selectedComponent
  }

  constructor(private formBuilder: UntypedFormBuilder) { }

  public get componentHasProperties() {
    return this.selectedComponent && Object.keys(this.selectedComponent.properties ?? {}).length
  }
}
