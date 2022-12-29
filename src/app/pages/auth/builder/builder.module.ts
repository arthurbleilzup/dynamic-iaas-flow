import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './builder.component'
import { BuilderRoutingModule } from './builder-routing.module'
import { FormsModule } from '@angular/forms'
import { CdkTreeModule } from '@angular/cdk/tree'
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTreeModule } from 'ng-zorro-antd/tree'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { DataService } from '../shared/services/data/data.service'
import { ComponentPropertiesComponent } from './components/component-properties/component-properties.component'
import { ComponentsTreeComponent } from './components/components-tree/components-tree.component'
import { ScreensListComponent } from './components/screens-list/screens-list.component'

const angularModules = [
  CommonModule,
  FormsModule,
  CdkTreeModule,
]

const nzModules = [
  IconsProviderModule,
  NzButtonModule,
  NzCardModule,
  NzDividerModule,
  NzInputModule,
  NzLayoutModule,
  NzListModule,
  NzSkeletonModule,
  NzSpaceModule,
  NzToolTipModule,
  NzTreeModule,
  NzTypographyModule,
]

const builderModules = [
  BuilderRoutingModule
]

const builderComponents = [
  BuilderComponent,
  ComponentPropertiesComponent,
  ComponentsTreeComponent,
  ScreensListComponent,
]

@NgModule({
  declarations: builderComponents,
  exports: builderComponents,
  imports: [
    ...angularModules,
    ...builderModules,
    ...nzModules,
  ],
  providers: [
    DataService,
  ]
})
export class BuilderModule { }
