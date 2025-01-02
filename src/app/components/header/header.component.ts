import {
  ChangeDetectorRef,
  Component,
  effect,
  OnInit,
  Signal,
  HostListener,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../service/menu.service';
import { Router } from '@angular/router';
import { TranslateServiceService } from '../../service/translate-service.service';
import { ContentSearchService } from '../../service/content-search.service';
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
  lang: any = 'mn';
  searchText: string = '';
  content: any = [];
  filteredContent: any[] = [];
  term: string = '';
  filteredItems: { id: any; title: string }[] = [];
  contentItems: any = [];
  logoUrl: string = '/assets/img/logo.png';
  clickedItemId: any = null;

  constructor(
    private translate: TranslateService,

    private menuService: MenuService,
    private langService: TranslateServiceService,
    private contentSearchService: ContentSearchService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.langService.loadLang.subscribe((lang: any) => {
      this.lang = lang;
      this.isEnglish = lang === 'mn';
      this.loadmenu();

      // Set the initial logo based on language
      this.logoUrl =
        lang === 'mn' ? '/assets/img/logo.png' : '/assets/img/logo-en.png';
    });
    this.contentSearchService.getAllContentSearch().subscribe(
      (data) => {
        this.contentItems = data;
        this.filteredItems = data;
        console.log('Content search fetched', this.contentItems);
      },
      (error) => {
        console.error('Error fetching content search', error);
      },
    );
  }

  loadmenu() {
    this.menuService.menulist(this.lang).subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Error fetching menu:', err); // Log any errors
      },
    });
  }

  toggleFlag() {
    const lang = this.lang == 'mn' ? 'en' : 'mn';
    this.isEnglish = lang === 'mn';
    localStorage.setItem('lang', lang || 'mn');
    this.langService.setLanguage();
    this.translate.use(lang);
    this.lang = lang;
    this.router.navigate(['home', { lang: lang }]);
    this.loadmenu();

    // Change the logo based on language
    this.logoUrl =
      lang === 'mn' ? '/assets/img/logo.png' : '/assets/img/logo-en.png';
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

  onSearchChange(): void {
    console.log('Search term changed:', this.term); // Debugging log
    const searchTerm = this.term.toLowerCase();
    this.filteredItems = this.contentItems.filter((item: any) =>
      `${item.title} ${item.info} ${item.description} `
        .toLowerCase()
        .includes(searchTerm),
    );
  }

  onSelectItem(item: any): void {
    this.term = `${item.title} ${item.info} ${item.description}`;
    this.filteredItems = []; // Clear dropdown
    console.log('Selected item:', item);
  }
  onSearchEnter(): void {
    this.cdr.detectChanges(); // Manually trigger change detection
    console.log('Enter key pressed. Term:', this.term);
    if (this.term && this.term.trim()) {
      this.router.navigate(['/search', this.term.trim()]);
    }
  }
}
