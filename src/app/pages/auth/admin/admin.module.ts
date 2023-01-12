import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzListModule } from 'ng-zorro-antd/list'
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'
import { AdminRoutingModule } from './admin-routing.module'
import { TenantsComponent } from './tenants/tenants.component'
import { UsersComponent } from './users/users.component'

const angularModules = [
  CommonModule,
]

const components = [
  TenantsComponent,
  UsersComponent,
]

const nzModules = [
  IconsProviderModule,
  NzAvatarModule,
  NzButtonModule,
  NzListModule,
]

@NgModule({
  imports: [
    AdminRoutingModule,
    ...angularModules,
    ...nzModules,
  ],
  declarations: components,
  exports: components,
})
export class AdminModule { }
