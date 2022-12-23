import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module'
import { BuilderComponent } from './builder/builder.component'
import { HomeComponent } from './home/home.component'
import { TenantDataComponent } from './tenant-data/tenant-data.component'
import { ThemeComponent } from './theme/theme.component'

const components = [
  BuilderComponent,
  HomeComponent,
  TenantDataComponent,
  ThemeComponent,
]

@NgModule({
  imports: [AuthRoutingModule],
  declarations: components,
  exports: components,
})
export class AuthModule { }
