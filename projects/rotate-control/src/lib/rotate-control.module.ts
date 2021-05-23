import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RotateControlComponent } from './rotate-control.component';

@NgModule({
  declarations: [
    RotateControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RotateControlComponent
  ]
})
export class RotateControlModule {

  /* constructor() {

    (function (w, d, s, u, e, c) {
      console.log("Installed");
      e = d.createElement(s);
      e.async = !0;
      e.src = u;
      c = d.getElementsByTagName(s)[0];
      c.parentNode.insertBefore(e, c)

      if (w['customgtag']) return;
      w['dataLayer'] = w['dataLayer'] || []
      w['customgtag'] = function () {
        w['dataLayer'].push(arguments);
      }
      w['customgtag']('config', 'G-LGPHC148MV', {
        'debug_mode': true
      });
      w['customgtag']('js', new Date());
      w['customgtag']('config', 'G-LGPHC148MV');
    })(window, document, 'script',
      'https://www.googletagmanager.com/gtag/js')
  } */
}
