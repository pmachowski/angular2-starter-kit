import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'header',
  template: `
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a class="pure-menu-heading" href="">Angular 2 Starter Kit</a>

        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="mailto:peter@machowski.co" class="pure-menu-link">Contact Author</a></li>
          <li class="pure-menu-item"><a href="https://github.com/pmachowski/angular2-starter-kit" class="pure-menu-link">Star on GitHub</a></li>
        </ul>
      </div>
    </div>
  `
})
export class HeaderComponent {

}
