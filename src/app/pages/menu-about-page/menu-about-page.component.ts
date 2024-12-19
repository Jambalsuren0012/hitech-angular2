import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { AboutusService } from '../../service/aboutus.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateServiceService } from '../../service/translate-service.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menu-about-page',
  templateUrl: './menu-about-page.component.html',
  styleUrls: ['./menu-about-page.component.css'],
})
export class MenuAboutPageComponent implements OnInit {
  selectedItem: any;
  aboutUsData: any = {}; // Initialize with an empty object
  lang = 'mn';
  menuid: any;
  imageUrl = environment.imgUrl;

  constructor(
    private menuService: MenuService,
    private aboutusService: AboutusService,
    private language: TranslateServiceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')!;
      this.menuService.menulist().subscribe((menuItems) => {
        this.selectedItem = menuItems
          .flatMap((menu: { subtitle: any }) => menu.subtitle)
          .find(
            (subtitle: { id: string; type: string }) =>
              subtitle.id === id && subtitle.type === 'aboutus',
          );

        // Fetch data after selecting menu item
        if (this.selectedItem) {
          this.menuid = this.selectedItem.id;
          this.fetchAllBook();
        }
      });
    });
  }

  fetchAllBook() {
    const data = { lang: this.lang, menuid: this.menuid ?? null };
    this.aboutusService.getAllAboutus(data).subscribe(
      (data: any) => {
        this.aboutUsData = data;
        console.log(this.aboutUsData); // Set fetched data to the aboutUsData variable
      },
      (error) => {
        console.error('Error fetching About Us data:', error);
      },
    );
  }
}
