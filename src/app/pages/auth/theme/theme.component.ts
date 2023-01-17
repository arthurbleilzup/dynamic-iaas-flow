import { Component } from '@angular/core';
import { DataService } from '../shared/services/data/data.service'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  constructor(public dataService: DataService) {}

  public get currentSettings() {
    return this.dataService.currentTenantData.settings
  }
}
