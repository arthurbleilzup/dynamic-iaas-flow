import { NgModule } from '@angular/core'
import { DataService } from './services/data/data.service'

const dataService = new DataService()

@NgModule()
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: DataService, useValue: dataService },
      ],
    }
  }
}
