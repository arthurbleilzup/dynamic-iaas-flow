import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { PublicRoutingModule } from './public-routing.module'

const components = [
  LoginComponent,
]

@NgModule({
  imports: [PublicRoutingModule],
  declarations: components,
  exports: components,
})
export class PublicModule { }
