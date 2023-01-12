import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service'

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {
  constructor(public dataService: DataService) {}
}
