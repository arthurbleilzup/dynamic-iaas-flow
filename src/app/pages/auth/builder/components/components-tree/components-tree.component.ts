import { Component, Input } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree'
import { Screen } from 'src/app/models/screen'
import { ComponentInfo, componentsInfo } from '../../settings/components'

@Component({
  selector: 'app-components-tree',
  templateUrl: './components-tree.component.html',
  styleUrls: ['./components-tree.component.scss']
})
export class ComponentsTreeComponent {
  public searchComponentValue: string = ''
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

  private getComponentInfo = (type: string): ComponentInfo => componentsInfo.find(ci => ci.type === type)!

  private getNodeKey(indexKeys: string, currentIndex: number): string {
    const previousIds = indexKeys ? indexKeys.split('-') : []
    previousIds.push(currentIndex.toString())
    return previousIds.join('-')
  }

  private getComponentTreeAsNzNodes = (components: Screen.Component[], indexKeys: string): NzTreeNodeOptions[] =>
    components.map(({ children, properties, type }, index) => {
      const info = this.getComponentInfo(type)
      const key = this.getNodeKey(indexKeys, index)
      return {
        key,
        title: info.title,
        icon: info.icon,
        isLeaf: true,
        component: {
          canHaveChildren: info.canHaveChildren,
          ...(properties && Object.keys(properties) ? { properties } : {}),
          ...(info.mainValueProp ? {
            mainValue: properties[info.mainValueProp],
          } : {}),
          info: info,
        },
        ...(info.canHaveChildren ? {
          isLeaf: false,
          expanded: true,
          children: this.getComponentTreeAsNzNodes(children, key),
        } : {}),
      }
    })
}
