import { NgModule } from '@angular/core'
import { CdkTreeModule } from '@angular/cdk/tree'

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
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'

import { AuthRoutingModule } from './auth-routing.module'
import { HomeComponent } from './home/home.component'
import { TenantDataComponent } from './tenant-data/tenant-data.component'
import { ThemeComponent } from './theme/theme.component'
import { DataService } from './shared/services/data/data.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BuilderModule } from './builder/builder.module'

const angularModules = [
  CommonModule,
]

const nzModules = [
  IconsProviderModule,
]

const components = [
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
