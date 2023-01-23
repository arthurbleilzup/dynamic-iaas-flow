import { Component, Input } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { Screen } from 'src/app/models/screen'
import { ComponentClickEvent } from '../components-tree/components-tree.component'

@Component({
  selector: 'app-component-properties',
  templateUrl: './component-properties.component.html',
  styleUrls: ['./component-properties.component.scss']
})
export class ComponentPropertiesComponent {
  private current?: ComponentClickEvent | null
  public propertiesForm?: UntypedFormGroup = undefined

  // the approach used here is only for the POC purposes
  @Input() public currentScreen?: Screen

  @Input() public set selectedComponent(value: ComponentClickEvent | null | undefined) {
    this.current = value

    if (this.current && this.current.info.properties) {
      const defaultTypeValue: Record<string, any> = {
        'text': '',
        'checkbox': false,
      }

      let group = {}
      this.current?.info.properties?.map(p => {
        const propValue = this.current?.component.properties
          ? this.current?.component.properties[p.valueProp]
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
    return this.current
  }

  constructor(private formBuilder: UntypedFormBuilder) { }

  public get componentHasProperties() {
    return this.selectedComponent
      && this.selectedComponent.component.properties
      && Object.keys(this.selectedComponent.component.properties).length
  }

  // the approach used here is only for the POC purposes
  public onValueChange(prop: string) {
    if (this.currentScreen && this.selectedComponent?.key) {
      const component = this.getComponentToBeSet(this.selectedComponent?.key)
      if (component) component.properties[prop] = this.propertiesForm?.controls[prop].value
    }
  }

  // the approach used here is only for the POC purposes
  private getComponentToBeSet(key: string): Screen.Component | undefined {
    if (key && this.currentScreen) {
      const paths = key.split('-').map(s => Number(s))
      const pathFinder = (parent: Screen.Component, remainingPositions: number[]): Screen.Component => {
        if (remainingPositions.length === 1) return parent.children[remainingPositions[0]]
        return pathFinder(parent.children[remainingPositions[0]], remainingPositions.slice(1))
      }
      if (paths.length === 1) return this.currentScreen?.components![paths[0]]
      return pathFinder(this.currentScreen?.components[paths[0]]!, paths.slice(1))
    }
    return undefined
  }
}
