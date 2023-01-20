import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree'
import { Subscription } from 'rxjs'
import { Screen } from 'src/app/models/screen'
import { DataService } from '../shared/services/data/data.service'
import { ComponentClickEvent } from './components/components-tree/components-tree.component'
import { ColorChangerService } from './components/dynamic/services/color-changer/color-changer.service'

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, OnDestroy {
  public searchComponentValue: string = ''
  public currentScreen?: Screen
  public componentNodes: NzTreeNodeOptions[] = []
  public screenSelectedComponent?: ComponentClickEvent
  private tenantChangeSubscription!: Subscription

  constructor(
    public dataService: DataService,
    public changeDetector: ChangeDetectorRef,
    private colorChangerService: ColorChangerService,
  ) {
  }

  public ngOnInit(): void {
    this.changeDetector.detectChanges()
    this.setColors()
    this.tenantChangeSubscription = this.dataService.onTenantChange.subscribe(() => this.setColors())
  }

  public ngOnDestroy(): void {
    this.tenantChangeSubscription.unsubscribe()
  }

  public onComponentClick(component: ComponentClickEvent): void {
    this.screenSelectedComponent = component
  }

  public screenSelectedChanged(screen: Screen): void {
    this.currentScreen = screen
  }

  private setColors() {
    const currentColorsSettings = this.dataService.currentTenantData.settings.colors
    this.colorChangerService.changeRootCssVarColor('--flow-header', currentColorsSettings.header)
    this.colorChangerService.changeRootCssVarColor('--flow-body', currentColorsSettings.body)
    this.colorChangerService.changeRootCssVarColor('--flow-primary', currentColorsSettings.primary)
    this.colorChangerService.changeRootCssVarColor('--flow-primary-text', currentColorsSettings.primaryText)
    this.colorChangerService.changeRootCssVarColor('--flow-accent', currentColorsSettings.accent)
    this.colorChangerService.changeRootCssVarColor('--flow-accent-text', currentColorsSettings.accentText)
    this.colorChangerService.changeRootCssVarColor('--flow-title', currentColorsSettings.title)
    this.colorChangerService.changeRootCssVarColor('--flow-subtitle', currentColorsSettings.subtitle)
    this.colorChangerService.changeRootCssVarColor('--flow-text', currentColorsSettings.text)
    this.colorChangerService.changeRootCssVarColor('--flow-input-text', currentColorsSettings.input.text)
    this.colorChangerService.changeRootCssVarColor('--flow-input-background', currentColorsSettings.input.background)
    this.colorChangerService.changeRootCssVarColor('--flow-input-label-border', currentColorsSettings.input.labelBorder)
    this.colorChangerService.changeRootCssVarColor('--flow-input-hover-background', currentColorsSettings.input.hover.background)
    this.colorChangerService.changeRootCssVarColor('--flow-input-hover-text', currentColorsSettings.input.hover.text)
    this.colorChangerService.changeRootCssVarColor('--flow-card-background', currentColorsSettings.card.background)
    this.colorChangerService.changeRootCssVarColor('--flow-card-border', currentColorsSettings.card.border)
  }
}
