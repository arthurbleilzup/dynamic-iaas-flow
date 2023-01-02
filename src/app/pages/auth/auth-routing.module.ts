import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TenantDataComponent } from './tenant-data/tenant-data.component'
import { ThemeComponent } from './theme/theme.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'builder' },
  { path: 'builder', loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule) },
  { path: 'home', component: HomeComponent },
  { path: 'tenant-data', component: TenantDataComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'auth', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
