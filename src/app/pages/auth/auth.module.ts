import { NgModule } from '@angular/core'

import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'

import { AuthRoutingModule } from './auth-routing.module'
import { HomeComponent } from './home/home.component'
import { TenantDataComponent } from './tenant-data/tenant-data.component'
import { ThemeComponent } from './theme/theme.component'
import { DataService } from './shared/services/data/data.service'
import { CommonModule } from '@angular/common'
import { BuilderModule } from './builder/builder.module'
import { AuthComponent } from './auth.component'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

const angularModules = [
  CommonModule,
]

const nzModules = [
  IconsProviderModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzMenuModule,
  NzSpaceModule,
  NzTypographyModule,
]

const components = [
  AuthComponent,
  HomeComponent,
  TenantDataComponent,
  ThemeComponent,
]

const authModules = [
  AuthRoutingModule,
  BuilderModule,
]

@NgModule({
  imports: [
    ...angularModules,
    ...nzModules,
    ...authModules,
  ],
  declarations: components,
  exports: components,
  providers: [
    DataService,
  ],
})
export class AuthModule { }
