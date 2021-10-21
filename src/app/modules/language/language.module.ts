import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  if (!isDevMode()) {
    const path = "/"+document.querySelector("base").href.replace("//","").split("/").slice(1).join("/");
    return new TranslateHttpLoader(httpClient, path+"assets/i18n/");
  }
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class LanguageModule { }
