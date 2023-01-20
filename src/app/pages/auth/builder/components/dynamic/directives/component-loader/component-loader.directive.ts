import { ComponentRef, Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Screen } from 'src/app/models/screen'
import { CardComponent } from '../../components/card/card.component'
import { CheckboxComponent } from '../../components/checkbox/checkbox.component'
import { ColumnComponent } from '../../components/column/column.component'
import { InfoComponent } from '../../components/info/info.component'
import { InputComponent } from '../../components/input/input.component'
import { LabelComponent } from '../../components/label/label.component'
import { RowComponent } from '../../components/row/row.component'
import { TitleComponent } from '../../components/title/title.component'
import { ComponentType } from '../../types/component.type'

const components: Record<ComponentType, Type<unknown>> = {
  'card': CardComponent,
  'checkbox': CheckboxComponent,
  'column': ColumnComponent,
  'info': InfoComponent,
  'input': InputComponent,
  'label': LabelComponent,
  'row': RowComponent,
  'title': TitleComponent,
}

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective implements OnInit, OnDestroy {
  private component?: ComponentRef<unknown>

  @Input() public appComponentLoader: Screen.Component = {
    type: 'info',
    properties: {
      label: 'Warning',
      text: 'No component found',
    },
    children: [],
  }

  constructor(private ref: ViewContainerRef) {
  }

  public ngOnInit(): void {
    this.loadComponents()
  }

  public ngOnDestroy(): void {
    this.component?.destroy()
  }

  private loadComponents(): void {
    const { type, properties, children } = this.appComponentLoader
    this.component = this.ref.createComponent(components[type as ComponentType])
    if (properties && Object.keys(properties).length) {
      this.component.setInput('properties', properties)
    }
    if (children && children.length) {
      this.component.setInput('children', children)
    }
  }
}
