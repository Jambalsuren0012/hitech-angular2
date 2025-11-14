import { Component, OnInit, Input } from '@angular/core';
import { TranslateServiceService } from '../../service/translate-service.service';
import { MenuService } from '../../service/menu.service';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  menuItems: any = [];
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faPhone = faPhone;
  filteredMenuItems: any = [];
  lang: string = 'mn';
  isEnglish: boolean = false;
  now: Date = new Date();
  logoUrl: string = '/assets/img/logo.png';

  /** Background image & main text configurable from parent */
  @Input() bgImage = 'assets/img/home-slid/earth.png';
  @Input() displayText = 'HITECH SOLUTION';

  constructor(
    private langService: TranslateServiceService,
    private menuService: MenuService,
  ) {
    // ⏰ цагийг секунд бүр шинэчлэх
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    this.langService.loadLang.subscribe((lang: string) => {
      this.lang = lang;
      this.isEnglish = lang === 'mn';
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
        this.menuItems = data;
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

  /** 👇 Энэ function нь index (number)-ийг хүлээж авна */
  getPanelText(panel: number): string {
    const phrase = this.displayText; // Жишээ нь "HITECH SOLUTION"
    // үсэг байхгүй бол хоосон буцаана
    return phrase[panel] || '';
  }
}
