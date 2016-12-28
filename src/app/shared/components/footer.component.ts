import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'footer',
  template: `
    <div class="footer l-box is-center">
      Made by Peter Machowski
    </div>
  `
})
export class FooterComponent {

}
