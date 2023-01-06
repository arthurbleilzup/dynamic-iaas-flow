import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DataService } from './app/pages/auth/shared/services/data/data.service'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
