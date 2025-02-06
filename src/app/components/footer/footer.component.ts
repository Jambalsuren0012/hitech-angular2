import { Component, OnInit } from '@angular/core';
import { TranslateServiceService } from '../../service/translate-service.service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  menuItems: any = [];
  filteredMenuItems: any = [];
  lang: string = 'mn';
  isEnglish: boolean = false;
  logoUrl: string = '/assets/img/logo.png';

  constructor(
    private langService: TranslateServiceService,
    private menuService: MenuService,
  ) {}

  ngOnInit(): void {
    this.langService.loadLang.subscribe((lang: string) => {
      this.lang = lang;
      this.isEnglish = lang === 'mn';

      // Set the logo based on language
      this.logoUrl =
        lang === 'mn'
          ? '/assets/img/mas_logo_mng.png'
          : '/assets/img/mas_logo_eng.png';
    });

    this.loadmenu();
  }

  loadmenu() {
    this.menuService.menulist(this.lang).subscribe({
      next: (data) => {
        console.log('Menu Items:', data); // Verify the menu structure
        this.menuItems = data;

        // Find the menu item where `id === "187"` and get its `subtitle`
        const selectedMenu = this.menuItems.find(
          (item: any) => item.id === '187',
        );
        this.filteredMenuItems = selectedMenu?.subtitle || [];
      },
      error: (err) => {
        console.error('Error fetching menu:', err);
        this.menuItems = [];
      },
    });
  }
}
