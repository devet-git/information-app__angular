import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'information_app';
  constructor(transalte: TranslateService) {
    let defaultLang = transalte.getBrowserLang() || 'en';
    transalte.addLangs(['en', 'vi'])
    transalte.setDefaultLang('en');
    transalte.use(defaultLang);
  }
}
