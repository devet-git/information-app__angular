import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type LangType = 'en' | 'vi'


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang
  }
  switchLang() {
    this.translate.use(this.currentLang)
  }
  changeLang(lang: LangType) {
    this.translate.use(lang)
  }
  get getCurrentLang() {
    return this.translate.currentLang
  }
}
