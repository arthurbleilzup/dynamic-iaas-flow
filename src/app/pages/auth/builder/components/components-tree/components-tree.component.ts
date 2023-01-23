import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree'
import { Screen } from 'src/app/models/screen'
import { ComponentInfo, componentsInfo } from '../../settings/components'

export interface ComponentClickEvent {
  key: string,
  info: ComponentInfo,
  component: Screen.Component,
}

@Component({
  selector: 'app-components-tree',
  templateUrl: './components-tree.component.html',
  styleUrls: ['./components-tree.component.scss']
})
export class ComponentsTreeComponent {
  public currentScreen?: Screen
  public componentNodes: NzTreeNodeOptions[] = []
  private _screenComponents: Screen.Component[] = []

  public get screenComponents() {
    return this._screenComponents
  }

  @Input() public set screenComponents(components: Screen.Component[] | null | undefined) {
    this._screenComponents = components ?? []
    this.componentNodes = this.getComponentTreeAsNzNodes(components ?? [], '')
  }

  @Output() public onComponentClick: EventEmitter<ComponentClickEvent> = new EventEmitter<ComponentClickEvent>()

  private getComponentInfo = (type: string): ComponentInfo => componentsInfo.find(ci => ci.type === type)!

  private getNodeKey(indexKeys: string, currentIndex: number): string {
    const previousIds = indexKeys ? indexKeys.split('-') : []
    previousIds.push(currentIndex.toString())
    return previousIds.join('-')
  }

  // the approach used here is only for the POC purposes
  private getComponentTreeAsNzNodes = (components: Screen.Component[], indexKeys: string): NzTreeNodeOptions[] =>
    components.map((component, index) => {
      const info = this.getComponentInfo(component.type)
      const key = this.getNodeKey(indexKeys, index)
      return {
        key,
        title: info.title,
        icon: info.icon,
        isLeaf: true,
        canHaveChildren: info.canHaveChildren,
        value: info.mainValueProp ? component.properties[info.mainValueProp] : '',
        component,
        info,
        ...(info.canHaveChildren ? {
          isLeaf: false,
          expanded: true,
          children: this.getComponentTreeAsNzNodes(component.children, key),
        } : {}),
      }
    })

  // the approach used here is only for the POC purposes
  public activeNode(event: NzFormatEmitEvent): void {
    this.onComponentClick.emit({
      key: event.node?.key ?? '',
      info: event.node?.origin['info'],
      component: event.node?.origin['component'],
    })
  }
}
