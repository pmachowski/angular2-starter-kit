import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node' // for AoT we need to manually split universal packages

import { AppModule, AppComponent } from './app/app.module'
import { SharedModule } from './app/shared/shared.module'

// Will be merged into @angular/platform-browser in a later release
// see https://github.com/angular/angular/pull/12322
import { Meta } from './angular2-meta'

export function getLRU() {
  return new Map()
}
export function getRequest() {
  return Zone.current.get('req') || {}
}
export function getResponse() {
  return Zone.current.get('res') || {}
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    // MaterialModule.forRoot() should be included first
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included

    FormsModule,
    RouterModule.forRoot([], { useHash: false }),

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
  ]
})
export class MainModule {
  constructor() {
  }
}
