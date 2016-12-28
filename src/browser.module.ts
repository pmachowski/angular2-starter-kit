import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { UniversalModule, isBrowser, isNode, AUTO_PREBOOT } from 'angular2-universal/browser' // for AoT we need to manually split universal packages
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload'

import { AppModule, AppComponent } from './app/app.module'
import { SharedModule } from './app/shared/shared.module'

// Will be merged into @angular/platform-browser in a later release
// see https://github.com/angular/angular/pull/12322
import { Meta } from './angular2-meta'

// import * as LRU from 'modern-lru'

export function getLRU(lru?: any) {
  // use LRU for node
  // return lru || new LRU(10)
  return lru || new Map()
}
export function getRequest() {
  // the request object only lives on the server
  return { cookie: document.cookie }
}
export function getResponse() {
  // the response object is sent as the index.html and lives on the server
  return {}
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    // MaterialModule.forRoot() should be included first
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included

    FormsModule,
    RouterModule.forRoot([], { useHash: false, preloadingStrategy: IdlePreload }),

    IdlePreloadModule.forRoot(),
    SharedModule.forRoot(),
    AppModule,
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },

    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },

    { provide: 'LRU', useFactory: getLRU, deps: [] },

    Meta,

    // { provide: AUTO_PREBOOT, useValue: false } // turn off auto preboot complete
  ]
})
export class MainModule {
  constructor() {

  }
}
