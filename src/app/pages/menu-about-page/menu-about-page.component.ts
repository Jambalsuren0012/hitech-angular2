import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-about-page',
  templateUrl: './menu-about-page.component.html',
  styleUrl: './menu-about-page.component.css',
})
export class MenuAboutPageComponent implements OnInit {
  selectedItem: any;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.menuService.menulist().subscribe((menuItems) => {
        this.selectedItem = menuItems
          .flatMap((menu: { subtitle: any }) => menu.subtitle)
          .find(
            (subtitle: { id: number; type: string }) =>
              subtitle.id === id && subtitle.type === 'aboutus',
          );
      });
    });
  }
}
