import { Screen } from './screen'
import { Settings } from './settings'

export interface Tenant {
  id: string,
  name: string,
}

export namespace Tenant {
  export interface Data {
    tenantId: string,
    settings: Settings,
    screens: Screen[],
  }
}
