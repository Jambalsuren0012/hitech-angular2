import {
  ChangeDetectorRef,
  Component,
  OnInit,
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
export class HeaderComponent implements OnInit {
  sections = [
    { id: 'hero', icon: 'fa-solid fa-house' },
    { id: 'services', icon: 'fa-solid fa-gears' },
    { id: 'partners', icon: 'fa-solid fa-handshake' },
    { id: 'certificate', icon: 'fa-solid fa-certificate' },
    { id: 'experience', icon: 'fa-solid fa-briefcase' },
  ];
  menudata = [
    {
      menuname: 'SERVICE INDUSTRY',
      subtitle: [{ menuname: 'Guest House' }, { menuname: 'Tourist Camp' }],
    },
    {
      menuname: 'TOURS',
      subtitle: [
        { menuname: 'Мэдээллийн аюулгүй байдлын цогц систем' },
        { menuname: 'Microsoft 365 үйлчилгээ' },
        {
          menuname:
            'Байгууллагын домэйн сүлжээ, дундын файл дамжуулалтын систем​',
        },
        { menuname: 'Серверийн техникийн өрөөний нүүлгэх, шийдэл' },
      ],
    },
    { menuname: 'FAQ', subtitle: [] },
    { menuname: 'ABOUT', subtitle: [] },
    { menuname: 'BLOG', subtitle: [] },
    { menuname: 'CONTACT US', subtitle: [] },
  ];
  openMenuIndex: number | null = null; // Track the open menu index

  menuOpen = false; // Control for mobile menu
  dropdownOpen = false; // Control for dropdown
  sidebarOpen = false; // Control for mobile menu

  activeItemId: number | null = null;
  isEnglish: boolean = true;
  menuItems: any = [];
  slicedMenuItems: any[] = []; // Array to store th
  lang: string = 'mn';
  searchText: string = '';
  contentItems: any = [];
  logoUrl: string = '/assets/img/logo.png';

  constructor(
    private translate: TranslateService,
    private menuService: MenuService,
    private langService: TranslateServiceService,
    private contentSearchService: ContentSearchService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    const savedLang = localStorage.getItem('lang') || 'mn';
    this.lang = savedLang;
    this.isEnglish = savedLang === 'mn';
    this.translate.use(savedLang);
    this.loadmenu();
    this.updateLogo(savedLang);

    this.langService.loadLang.subscribe((lang: string) => {
      this.lang = lang;
      this.isEnglish = lang === 'mn';
      this.updateLogo(lang);
      this.loadmenu();
    });
    this.slicedMenuItems = this.menuItems.slice(0, 4);

    this.contentSearchService.getAllContentSearch().subscribe({
      next: (data) => {
        this.contentItems = data;
      },
      error: (error) => {
        console.error('Error fetching content search', error);
      },
    });
  }
  loadmenu() {
    this.menuService.menulist(this.lang).subscribe({
      next: (data) => {
        console.log('Menu Items:', data); // Log menuItems to verify the structure
        this.menuItems = data.map((item: any) => ({
          ...item,
          dropdownOpen: false, // Add `dropdownOpen` property for each menu item
        }));
      },
      error: (err) => {
        console.error('Error fetching menu:', err);
        this.menuItems = [];
      },
    });
  }

  toggleFlag() {
    const lang = this.lang === 'mn' ? 'en' : 'mn';
    this.isEnglish = lang === 'mn';
    localStorage.setItem('lang', lang);
    this.langService.setLanguage();
    this.translate.use(lang);
    this.lang = lang;
    this.router.navigate(['home', { lang }]);
    this.loadmenu();
    this.updateLogo(lang);
  }

  private updateLogo(lang: string) {
    this.logoUrl =
      lang === 'mn'
        ? '/assets/img/mas_logo_mng.png'
        : '/assets/img/mas_logo_eng.png';
  }

  toggleMobileCat(itemId: number) {
    this.activeItemId = this.activeItemId === itemId ? null : itemId;
  }

  onSearchChange() {
    this.searchText = this.searchText.trim();
    if (this.searchText) {
      this.router.navigate(['/search', this.searchText]);
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleDropdown(item: any) {
    this.menuItems.forEach((menuItem: any) => {
      if (menuItem !== item) {
        menuItem.dropdownOpen = false; // Close other dropdowns
      }
    });
    item.dropdownOpen = !item.dropdownOpen; // Toggle the clicked dropdown
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-menu')) {
      this.dropdownOpen = false;
    }
  }
  togglemobileMenu(index: number) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }
}
