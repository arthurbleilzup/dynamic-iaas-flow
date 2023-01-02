import { Component, OnInit } from '@angular/core'
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree'
import { Screen } from 'src/app/models/screen'
import { DataService } from '../shared/services/data/data.service'

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
  }
}
