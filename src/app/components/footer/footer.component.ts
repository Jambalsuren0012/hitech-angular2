import { Component, OnInit } from '@angular/core';
import { TranslateServiceService } from '../../service/translate-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'], // Corrected property name
})
export class FooterComponent implements OnInit {
  lang: string = 'mn';
  isEnglish: boolean = false; // Declare the variable
  logoUrl: string = '/assets/img/logo.png';

  constructor(private langService: TranslateServiceService) {}

  ngOnInit(): void {
    this.langService.loadLang.subscribe((lang: string) => {
      this.lang = lang;
      this.isEnglish = lang === 'mn';

      // Set the initial logo based on language
      this.logoUrl =
        lang === 'mn'
          ? '/assets/img/mas_logo_mng.png'
          : '/assets/img/mas_logo_eng.png';
    });
  }
}
