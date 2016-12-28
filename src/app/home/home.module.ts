import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { SplashComponent } from './components/splash.component'

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    SplashComponent
  ]
})
export class HomeModule { }
