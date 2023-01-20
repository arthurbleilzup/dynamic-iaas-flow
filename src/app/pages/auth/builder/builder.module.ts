import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CdkTreeModule } from '@angular/cdk/tree'

import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTreeModule } from 'ng-zorro-antd/tree'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSelectModule }  from '@angular/material/select'

import { BuilderComponent } from './builder.component'
import { BuilderRoutingModule } from './builder-routing.module'
import { ComponentPropertiesComponent } from './components/component-properties/component-properties.component'
import { ComponentsTreeComponent } from './components/components-tree/components-tree.component'
import { ScreensListComponent } from './components/screens-list/screens-list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CardComponent } from './components/dynamic/components/card/card.component'
import { CheckboxComponent } from './components/dynamic/components/checkbox/checkbox.component'
import { ColumnComponent } from './components/dynamic/components/column/column.component'
import { InfoComponent } from './components/dynamic/components/info/info.component'
import { InputComponent } from './components/dynamic/components/input/input.component'
import { LabelComponent } from './components/dynamic/components/label/label.component'
import { RowComponent } from './components/dynamic/components/row/row.component'
import { TitleComponent } from './components/dynamic/components/title/title.component'
import { ColorChangerService } from './components/dynamic/services/color-changer/color-changer.service'
import { ComponentLoaderDirective } from './components/dynamic/directives/component-loader/component-loader.directive'

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CdkTreeModule,
]

const nzModules = [
  IconsProviderModule,
  NzButtonModule,
  NzCardModule,
  NzCheckboxModule,
  NzDividerModule,
  NzEmptyModule,
  NzFormModule,
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
  BuilderRoutingModule,
]

const builderComponents = [
  BuilderComponent,
  ComponentPropertiesComponent,
  ComponentsTreeComponent,
  ScreensListComponent,
]

const dynamicComponents = [
  CardComponent,
  CheckboxComponent,
  ColumnComponent,
  ComponentLoaderDirective,
  InfoComponent,
  InputComponent,
  LabelComponent,
  RowComponent,
  TitleComponent,
]

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [
    ...builderComponents,
    ...dynamicComponents,
  ],
  exports: builderComponents,
  imports: [
    ...angularModules,
    ...builderModules,
    ...materialModules,
    ...nzModules,
  ],
  providers: [
    ColorChangerService,
  ],
})
export class BuilderModule { }
