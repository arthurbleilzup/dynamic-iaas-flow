import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { IconsProviderModule } from 'src/app/shared/modules/icons-provider.module'
import { LoginComponent } from './login/login.component'
import { PublicRoutingModule } from './public-routing.module'

const components = [
  LoginComponent,
]

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
]

const nzModules = [
  IconsProviderModule,
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzInputModule,
  NzTypographyModule,
]

@NgModule({
  imports: [
    ...angularModules,
    ...nzModules,
    PublicRoutingModule,
  ],
  declarations: components,
  exports: components,
})
export class PublicModule { }
