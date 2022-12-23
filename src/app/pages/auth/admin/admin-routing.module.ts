import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantsComponent } from './tenants/tenants.component'
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  { path: 'tenants', component: TenantsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
