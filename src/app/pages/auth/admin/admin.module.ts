import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module'
import { TenantsComponent } from './tenants/tenants.component'
import { UsersComponent } from './users/users.component'

const components = [
  TenantsComponent,
  UsersComponent,
]

@NgModule({
  imports: [AdminRoutingModule],
  declarations: components,
  exports: components,
})
export class AdminModule { }
