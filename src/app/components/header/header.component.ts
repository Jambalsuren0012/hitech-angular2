import { ChangeDetectorRef, Component } from '@angular/core';
import path from 'path';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isMobileMenuCat = false;
  activeItemId: number | null = null;
  isEnglish: boolean = true;

  currentFlag: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png?20221024175312';

  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {
    this.translate.setDefaultLang('mn ');
    this.translate.use('en'); // Set initial language
  }

  toggleFlag() {
    console.log('Toggle flag called');
    this.isEnglish = !this.isEnglish;
    const language = this.isEnglish ? 'en' : 'mn';
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

  menuItems = [
    {
      id: 1,
      name: 'ABOUT_US', // Translation key for "Бидний тухай"
      subtitle: [
        { title: 'GREETING', path: '/' }, // Translation key for "Мэндчилгээ"
        { title: 'INTRODUCTION', path: '/' }, // Translation key for "Танилцуулга"
        { title: 'STRUCTURE', path: '/' }, // Translation key for "Бүтэц, зохион байгуулалт"
        { title: 'ACADEMIC_COUNCIL', path: '/' }, // Translation key for "Эрдмийн зөвлөл"
        { title: 'STRATEGIC_GOALS', path: '/' }, // Translation key for "Стратеги зорилт"
        { title: 'RESEARCH_DIRECTIONS', path: '/' }, // Translation key for "Судалгааны тэргүүлэх болон үндсэн чиглэл"
      ],
    },
    {
      id: 2,
      name: 'SECTORS', // Translation key for "Салбарууд"
      subtitle: [
        { title: 'ADMINISTRATION', path: '/' }, // Translation key for "Захиргаа, аж ахуй"
        { title: 'STONE_AGE_RESEARCH', path: '/' }, // Translation key for "Чулуун зэвсгийн судалгааны салбар Судлаачид"
        {
          title: 'BRONZE_AND_IRON_RESEARCH',
          path: '/', // Translation key for "Хүрэл, төмрийн үеийн судалгааны салбар Судлаачид"
        },
        {
          title: 'HUNNUS_AND_ANCIENT_STUDIES',
          path: '/', // Translation key for "Хүннү ба эртний улсуудын судалгааны салбар Судлаачид"
        },
        { title: 'MEDIEVAL_RESEARCH', path: '/' }, // Translation key for "Дундад зууны судалгааны салбар Судлаачид"
        { title: 'INNOVATION_AND_COOPERATION', path: '/' }, // Translation key for "Инновац, хамтын ажиллагааны салбар Судлаачид"
        { title: 'ARCHIVE_AND_LABORATORY', path: '/' }, // Translation key for "Сан хөмрөг, лабораторийн салбар Судлаачид"
      ],
    },
    {
      id: 3,
      name: 'Хууль, журам',
      subtitle: [
        { title: 'Хууль', path: '/' },
        { title: 'Журам', path: '/' },
        { title: 'Шилэн данс', path: '/' },
      ],
    },
    {
      id: 4,
      name: 'Эрдэм шинжилгээ',
      subtitle: [
        { title: 'Ололт амжилт', path: '/' },
        { title: 'Эрдэм шинжилгээний хурал', path: '/' },
        { title: 'Тусгай үзэсгэлэн', path: '/' },
        { title: 'Дотоод хамтын ажиллагаа', path: '/' },
        { title: 'Стратеги зорилт', path: '/' },
        { title: 'Гадаад хамтын ажиллагаа', path: '/' },
      ],
    },
    {
      id: 5,
      name: 'Ном бүтээл',
      subtitle: [
        { title: 'Нэгэн сэдэвт бүтээл', path: '/' },
        { title: 'Хамтын бүтээл, ном товхимол', path: '/' },
        { title: '“Археологийн судлал” сэтгүүл', path: '/' },
        { title: '“Монголын археологийн мэдээ” цахим сэтгүүл', path: '/' },
        { title: 'Стратеги зорилт', path: '/' },
        { title: 'Гадаад хамтын ажиллагаа', path: '/' },
      ],
    },
    {
      id: 6,
      name: 'Галерей',
      subtitle: [
        { title: 'Баримтат кино', path: '/' },
        { title: 'Нэвтрүүлэг, ярилцлага', path: '/' },
        { title: 'Нийтлэл', path: '/' },
        { title: 'Зургийн цомог', path: '/' },
      ],
    },
  ];
}
