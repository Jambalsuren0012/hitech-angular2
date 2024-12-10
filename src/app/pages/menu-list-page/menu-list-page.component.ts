import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-list-page',
  templateUrl: './menu-list-page.component.html',
  styleUrls: ['./menu-list-page.component.css'],
})
export class MenuListPageComponent implements OnInit {
  selectedItem: any;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')!; // Keep as string
      this.menuService.menulist().subscribe((menuItems) => {
        this.selectedItem = menuItems
          .flatMap((menu: { subtitle: any }) => menu.subtitle)
          .find(
            (subtitle: { id: string; type: string }) =>
              subtitle.id === id && subtitle.type === 'list',
          );
      });
    });
  }
}
