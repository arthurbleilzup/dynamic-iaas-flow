import { Component, OnDestroy } from '@angular/core'
import { Event, NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Tenant } from 'src/app/models/tenant'
import { DataService } from './shared/services/data/data.service'

interface BreadcrumbItem {
  icon?: string,
  text?: string,
}

interface PageInfo {
  title: string,
  breadcrumbs: BreadcrumbItem[],
}

interface PageInfoMap {
  [key: string]: PageInfo | null | undefined,
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {
  public selectedTenant: Tenant | null | undefined = null
  public currentPageInfo: PageInfo | null | undefined = null
  private routesSubscription: Subscription
  private urlsMaps: PageInfoMap = {
    '/auth/admin/tenants': {
      title: 'Tenants',
      breadcrumbs: [
        { icon: 'home' },
        { icon: 'audit', text: 'Administrator' },
        { text: 'Tenants' },
      ],
    },
    '/auth/admin/users': {
      title: 'Users & Permissions',
      breadcrumbs: [
        { icon: 'home' },
        { icon: 'audit', text: 'Administrator' },
        { text: 'Users & Permissions' },
      ],
    },
    '/auth/theme': {
      title: 'Theme',
      breadcrumbs: [
        { icon: 'home' },
        { icon: 'idcard', text: 'Tenant' },
        { text: 'Settings' },
        { text: 'Theme' },
      ],
    },
    '/auth/tenant-data': {
      title: 'Tenant Data',
      breadcrumbs: [
        { icon: 'home' },
        { icon: 'idcard', text: this.selectedTenant?.name ?? 'Current Tenant' },
        { text: 'Settings' },
        { text: 'Tenant Data' },
      ],
    },
    '/auth/builder': {
      title: 'Builder',
      breadcrumbs: [
        { icon: 'home' },
        { icon: 'idcard', text: 'Tenant' },
        { text: 'Builder' },
      ],
    },
    '/auth/home': null,
  }

  constructor(private router: Router, public dataService: DataService) {
    this.selectedTenant = dataService.tenants.find(t => t.id === this.dataService.currentTenantData.tenantId)
    this.routesSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPageInfo = this.urlsMaps[event.url]
      }
    })
  }

  public ngOnDestroy(): void {
    this.routesSubscription.unsubscribe()
  }
}
