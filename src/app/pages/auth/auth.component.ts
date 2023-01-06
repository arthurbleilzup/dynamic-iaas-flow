import { Component } from '@angular/core'
import { Tenant } from 'src/app/models/tenant'
import { DataService } from './shared/services/data/data.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public selectedTenant: Tenant | null | undefined = null

  constructor(public dataService: DataService) {
    this.selectedTenant = dataService.tenants.find(t => t.id === this.dataService.currentTenantData.tenantId)
  }
}
