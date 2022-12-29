import { Component, OnInit } from '@angular/core'
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree'
import { Screen } from 'src/app/models/screen'
import { DataService } from '../shared/services/data/data.service'
import { ComponentInfo, componentsInfo } from './settings/components'

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  public searchComponentValue: string = ''
  public currentScreen?: Screen
  public componentNodes: NzTreeNodeOptions[] = []

  constructor(public dataService: DataService) {
  }

  public ngOnInit(): void {
    this.currentScreen = this.dataService.currentTenantData.screens[1]
    this.componentNodes = this.getComponentTreeAsNzNodes(this.currentScreen.components, '')

    console.log(this.componentNodes)
  }

  private getComponentInfo(type: string): ComponentInfo {
    return componentsInfo.find(ci => ci.type === type)!
  }

  private getNodeKey(indexKeys: string, currentIndex: number): string {
    const previousIds = indexKeys ? indexKeys.split('-') : []
    previousIds.push(currentIndex.toString())
    return previousIds.join('-')
  }

  private getComponentTreeAsNzNodes(components: Screen.Component[], indexKeys: string): NzTreeNodeOptions[] {
    return components.map(({ children, properties, type }, index) => {
      const info = this.getComponentInfo(type)
      const key = this.getNodeKey(indexKeys, index)
      return {
        key,
        title: info.title,
        icon: info.icon,
        isLeaf: true,
        canHaveChildren: info.canHaveChildren,
        ...(properties && Object.keys(properties) ? { properties } : {}),
        ...(info.canHaveChildren ? {
          isLeaf: false,
          expanded: true,
          children: this.getComponentTreeAsNzNodes(children, key),
        } : {}),
        ...(info.mainValueProp ? {
          mainValue: properties[info.mainValueProp],
        } : {}),
      }
    })
  }
}
