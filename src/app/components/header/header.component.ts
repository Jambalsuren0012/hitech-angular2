import {
  ChangeDetectorRef,
  Component,
  effect,
  OnInit,
  Signal,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../service/menu.service';
import { Router } from '@angular/router';
import { TranslateServiceService } from '../../service/translate-service.service';
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
  lang: Signal<string | undefined>;

  currentFlag: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png?20221024175312';

  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private menuService: MenuService,
    private langService: TranslateServiceService,
  ) {
    // this.translate.setDefaultLang('en'); // Default language
    // this.translate.use('mn'); // Start with Mongolian

    // this.translate.onLangChange.subscribe((event) => {
    //   console.log('Language changed:', event.lang);
    //   this.cdr.detectChanges(); // Trigger Angular's change detection
    //   this.loadmenu();
    // });

    // // Debugging available languages and current language
    // console.log('Available Languages:', this.translate.getLangs());
    // console.log('Current Language:', this.translate.currentLang);

    this.lang = this.langService.lang.asReadonly();
    effect(() => {
      this.menuService.menulist(this.lang).subscribe({
        next: (data) => {
          this.menuItems = data;
        },
        error: (err) => {
          console.error('Error fetching menu:', err); // Log any errors
        },
      });
    });
  }

  ngOnInit() {
    // this.loadmenu();
  }

  loadmenu() {}

  toggleFlag() {
    // console.log('Toggle flag called');
    // this.isEnglish = !this.isEnglish;
    // const language = this.isEnglish ? 'mn' : 'en';
    // this.translate.use(language);

    const lang = this.langService.lang() == 'mn' ? 'en' : 'mn';
    this.langService.setLang(lang);
    this.translate.use(lang);
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

  changeLang() {
    const lang = this.langService.lang() == 'mn' ? 'en' : 'mn';
    this.langService.setLang(lang);
    this.translate.use(lang);
  }
}
