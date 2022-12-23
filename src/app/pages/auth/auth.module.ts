import { NgModule } from '@angular/core'

import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'

import { AuthRoutingModule } from './auth-routing.module'
import { BuilderComponent } from './builder/builder.component'
import { HomeComponent } from './home/home.component'
import { TenantDataComponent } from './tenant-data/tenant-data.component'
import { ThemeComponent } from './theme/theme.component'

const nzModules = [
  NzButtonModule,
  NzCardModule,
  NzDividerModule,
  NzLayoutModule,
  NzListModule,
  NzSkeletonModule,
  NzSpaceModule,
  NzTreeViewModule,
  NzTypographyModule,
]

const components = [
  BuilderComponent,
  HomeComponent,
  TenantDataComponent,
  ThemeComponent,
]

@NgModule({
  imports: [
    AuthRoutingModule,
    IconsProviderModule,
    ...nzModules,
  ],
  declarations: components,
  exports: components,
})
export class AuthModule { }
