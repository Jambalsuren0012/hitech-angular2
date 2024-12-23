import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { AboutusService } from '../../service/aboutus.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateServiceService } from '../../service/translate-service.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css',
})
export class ContentPageComponent {
  selectedItem: any;
  aboutMenuContent: any = {}; // Initialize with an empty object
  selectedContent: any; // Newly added property
  lang = 'mn';
  menuid: any;
  imageUrl = environment.imgUrl;
  isLoading = true;

  constructor(
    private menuService: MenuService,
    private aboutusService: AboutusService,
    private language: TranslateServiceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Fetch the `id` from the route parameters
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log('Fetched ID from route params:', id);

      // Fetch the menu list from the API
      this.menuService.menulist().subscribe((menuItems) => {
        // Find the selected parent item based on the `id`
        this.selectedItem = menuItems.find((menu: any) =>
          menu.subtitle.some((subtitle: { id: string }) => subtitle.id === id),
        );

        if (this.selectedItem) {
          // Find the specific `subtitle` matching the `id`
          const subtitle = this.selectedItem.subtitle.find(
            (subtitle: { id: string }) => subtitle.id === id,
          );

          if (subtitle) {
            // Assign parent to subtitle if it exists
            subtitle.parent = this.selectedItem;

            // Merge the `subtitle` data into `selectedItem`
            this.selectedItem = { ...this.selectedItem, ...subtitle };
            this.menuid = subtitle?.id;

            console.log('Selected Item:', this.selectedItem);

            // Fetch and assign the about us content
            if (this.menuid) {
              this.fetchAllMenuContent();
            }
          }
        }
      });
    });
  }

  fetchAllMenuContent(): void {
    const data = { lang: this.lang, menuid: this.menuid ?? null };
    this.aboutusService.getAllMenuContent(data).subscribe(
      (response: any) => {
        this.aboutMenuContent = response;
        this.selectedContent = response; // Assign the fetched data to `selectedContent`
        console.log('AboutMenuContent', this.aboutMenuContent);
      },
      (error) => {
        console.error('Error fetching  data content:', error);
      },
    );
  }
}
