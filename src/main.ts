import 'jquery';
import 'expose-loader?$!expose-loader?jQuery!jquery';

import 'jszip';
import 'expose-loader?JSZip!jszip';

import '@progress/kendo-ui';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
