import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'splash',
  template: `
    <div class="splash-container">
      <div class="splash">
        <h1 class="splash-head">Server Rendering made simple</h1>
        <p class="splash-subhead">
          Downloading this boilerplate will boost your productivity.
        </p>
        <p>
          <a href="https://github.com/pmachowski/angular2-starter-kit/archive/master.zip" class="pure-button pure-button-primary">Download</a>
        </p>
      </div>
    </div>
  `
})
export class SplashComponent {

}
