import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-list-page',
  templateUrl: './menu-list-page.component.html',
  styleUrls: ['./menu-list-page.component.css'],
})
export class MenuListPageComponent implements OnInit {
  selectedMenu: any;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.menuService.menulist().subscribe((menuItems) => {
        this.selectedMenu = menuItems.find(
          (item: { id: any }) => item.id === id,
        );
      });
    });
  }
}
