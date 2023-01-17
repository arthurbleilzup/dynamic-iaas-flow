import { NgModule } from '@angular/core'

import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzImageModule } from 'ng-zorro-antd/image'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

import { AuthRoutingModule } from './auth-routing.module'
import { HomeComponent } from './home/home.component'
import { TenantDataComponent } from './tenant-data/tenant-data.component'
import { ThemeComponent } from './theme/theme.component'
import { CommonModule } from '@angular/common'
import { BuilderModule } from './builder/builder.module'
import { AuthComponent } from './auth.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
]

const nzModules = [
  IconsProviderModule,
  NzAvatarModule,
  NzBreadCrumbModule,
  NzCardModule,
  NzDropDownModule,
  NzFormModule,
  NzImageModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule,
  NzSelectModule,
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
})
export class AuthModule { }
