import { EventEmitter, Injectable } from '@angular/core';
import { Tenant } from 'src/app/models/tenant'
import { JsonUtils } from 'src/app/models/json'
import * as Ts from '../../../../../data/tenants.json'
import * as T1 from '../../../../../data/tenants/tenant#1.json'
import * as T2 from '../../../../../data/tenants/tenant#2.json'
import * as T3 from '../../../../../data/tenants/tenant#3.json'
import * as T4 from '../../../../../data/tenants/tenant#4.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tenantsData: Tenant.Data[] = [
    (T1 as unknown as JsonUtils.Default<Tenant.Data>).default,
    (T2 as unknown as JsonUtils.Default<Tenant.Data>).default,
    (T3 as unknown as JsonUtils.Default<Tenant.Data>).default,
    (T4 as unknown as JsonUtils.Default<Tenant.Data>).default,
  ]
  public tenants: Tenant[] = (Ts as unknown as JsonUtils.Data<Tenant[]>).default.data
  public currentTenantData: Tenant.Data = this.tenantsData[0]
  public onTenantChange: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
    this.tenants = (Ts as unknown as JsonUtils.Data<Tenant[]>).default.data
    this.currentTenantData = this.tenantsData[0]
  }

  public setCurrentTenantData(tenant: Tenant): void {
    this.currentTenantData = this.tenantsData.find(t => t.tenantId === tenant.id)!
    this.onTenantChange.emit(this.currentTenantData.tenantId)
  }
}
