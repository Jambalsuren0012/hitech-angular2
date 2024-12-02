import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import path from 'path';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../service/menu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isMobileMenuCat = false;
  activeItemId: number | null = null;
  isEnglish: boolean = true;
  menuItems: any = [];

  currentFlag: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png?20221024175312';

  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private menuService: MenuService,
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('mn');
    this.translate.onLangChange.subscribe((event) => {
      console.log('Language changed:', event.lang);
    });
  }

  ngOnInit() {
    this.loadmenu();
  }

  loadmenu() {
    this.menuService.menulist().subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Error fetching menu:', err); // Log any errors
      },
    });
  }

  toggleFlag() {
    console.log('Toggle flag called');
    this.isEnglish = !this.isEnglish;
    const language = this.isEnglish ? 'mn' : 'en';
    this.translate.use(language);
  }

  toggleMobileCat(itemId: number) {
    // Toggle the active item id
    if (this.activeItemId === itemId) {
      this.activeItemId = null; // Close if the same item is clicked
    } else {
      this.activeItemId = itemId; // Open the submenu for the clicked item
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
