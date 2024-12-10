import { Injectable } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import path from 'path';
import { TranslateService } from '@ngx-translate/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TranslateServiceService {
  currentFlag: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png?20221024175312';
  isMobileMenuOpen = false;
  isMobileMenuCat = false;
  activeItemId: number | null = null;
  isEnglish: boolean = true;
  menuItems: any = [];
  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('mn');
    this.translate.onLangChange.subscribe((event) => {
      console.log('Language changed:', event.lang);
    });
  }
  toggleFlag() {
    console.log('Toggle flag called');
    this.isEnglish = !this.isEnglish;
    const language = this.isEnglish ? 'mn' : 'en';
    this.translate.use(language);
  }
}
