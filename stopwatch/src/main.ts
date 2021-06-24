import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//index.html을 받아서 main.ts가 실행되고 main.ts는 AppModule을 실행시킨다. AppMoudle은
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
