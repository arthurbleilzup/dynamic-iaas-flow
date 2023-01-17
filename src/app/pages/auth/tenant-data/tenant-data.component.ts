import { Component, OnInit, OnDestroy } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { DataService } from '../shared/services/data/data.service'
import { fallbackImageBase64 } from './fallback-image'

@Component({
  selector: 'app-tenant-data',
  templateUrl: './tenant-data.component.html',
  styleUrls: ['./tenant-data.component.scss']
})
export class TenantDataComponent implements OnInit, OnDestroy {
  public fallbackImage: string = fallbackImageBase64
  public tenantDataForm!: UntypedFormGroup
  private tenantChangeSubscription: Subscription | null = null

  constructor(private formBuilder: UntypedFormBuilder, private dataService: DataService) {
    this.setTenantData()
  }

  public ngOnInit(): void {
    this.tenantChangeSubscription = this.dataService.onTenantChange.subscribe(data => {
      this.setTenantData()
    })
  }

  public ngOnDestroy(): void {
    this.tenantChangeSubscription?.unsubscribe()
  }

  private setTenantData(): void {
    this.tenantDataForm = this.formBuilder.group({
      name: [this.dataService.currentTenantData.settings.tenant.name, [Validators.required]],
      logoUrl: [this.dataService.currentTenantData.settings.tenant.logoUrl, [Validators.required]],
    })
  }
}
