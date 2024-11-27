import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css'],
})
export class DefaultPageComponent implements OnInit {
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
            (subtitle: { id: number; type: number }) =>
              subtitle.id === id && subtitle.type === 2,
          );
      });
    });
  }
}
