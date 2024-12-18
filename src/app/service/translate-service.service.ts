import { Injectable, signal } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class TranslateServiceService {
 loadLang: BehaviorSubject<any> = new BehaviorSubject<any>('mn');

 public setLanguage() {
  const lang = localStorage.getItem('lang');
  if (lang) {
   this.loadLang.next(lang);
  } else {
   this.loadLang.next('mn');
  }
 }

 // currentFlag: string =
 //   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png?20221024175312';
 // isMobileMenuOpen = false;
 // isMobileMenuCat = false;
 // activeItemId: number | null = null;
 // isEnglish: boolean = true;
 // menuItems: any = [];
 // constructor(private translate: TranslateService) {
 //   this.translate.setDefaultLang('en');
 //   this.translate.use('mn');
 //   this.translate.onLangChange.subscribe((event) => {
 //     console.log('Language changed:', event.lang);
 //   });
 // }
 // toggleFlag() {
 //   console.log('Toggle flag called');
 //   this.isEnglish = !this.isEnglish;
 //   const language = this.isEnglish ? 'mn' : 'en';
 //   this.translate.use(language);
 // }
}
