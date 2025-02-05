import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { AboutusService } from '../../service/aboutus.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateServiceService } from '../../service/translate-service.service';
import { environment } from '../../environments/environment';
import { MembersService } from '../../service/members.service';
import { Router } from '@angular/router'; // Import Router to navigate

@Component({
  selector: 'app-menu-about-page',
  templateUrl: './menu-about-page.component.html',
  styleUrls: ['./menu-about-page.component.css'],
})
export class MenuAboutPageComponent implements OnInit {
  selectedItem: any;
  aboutUsData: any[] = []; // Ensure it is an array

  selectedContent: any; // Newly added property
  lang = 'mn';
  menuid: any;
  imageUrl = environment.imgUrl;
  isLoading = true;

  constructor(
    private menuService: MenuService,
    private aboutusService: AboutusService,
    private language: TranslateServiceService,
    private membersService: MembersService,
    private route: ActivatedRoute,
    private router: Router, // Inject Router
  ) {}

  ngOnInit(): void {
    // Fetch the `id` from the route parameters
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log('Fetched ID from route params:', id);

      // Fetch the menu list from the API
      this.menuService.menulist().subscribe((menuItems) => {
        console.log('Fetched Menu Items:', menuItems); // Log full menu list

        // Find the selected parent item based on the `id`
        this.selectedItem = menuItems.find((menu: any) =>
          menu.subtitle.some((subtitle: { id: string }) => subtitle.id === id),
        );

        console.log('Selected Parent Item:', this.selectedItem);

        if (this.selectedItem) {
          // Find the specific `subtitle` matching the `id`
          const subtitle = this.selectedItem.subtitle.find(
            (subtitle: { id: string }) => subtitle.id === id,
          );

          console.log('Selected Subtitle:', subtitle);

          if (subtitle) {
            // Assign parent to subtitle if it exists
            subtitle.parent = this.selectedItem;

            // Merge the `subtitle` data into `selectedItem`
            this.selectedItem = { ...this.selectedItem, ...subtitle };
            this.menuid = subtitle?.id;

            console.log('Final Selected Item:', this.selectedItem);

            // Fetch and assign the about us content
            if (this.menuid) {
              this.fetchAllAbout();
              this.fetchAllMembers(); // Fetch members data here
            }
          }
        }
      });
    });
  }

  fetchAllAbout(): void {
    const data = { lang: this.lang, menuid: this.menuid ?? null };
    this.aboutusService.getAllAboutus(data).subscribe(
      (response: any) => {
        console.log('Fetched About Us Data:', response);

        // Ensure response is an array before assigning it
        this.aboutUsData = Array.isArray(response) ? response : [response];
        console.log('About Us Data:', this.aboutUsData);

        this.selectedContent = this.aboutUsData[0] || {}; // Assign first item if available
      },
      (error) => {
        console.error('Error fetching About Us data:', error);
      },
    );
  }

  fetchAllMembers(): void {
    // Ensure `menuid` is available and valid
    if (this.menuid) {
      console.error('No menuid available. Cannot fetch members.');
      return; // Stop if menuid is not set
    }

    const data = { lang: this.lang, menuid: this.menuid }; // Pass menuid in the data
    this.membersService.getAllMembers(data).subscribe(
      (response: any) => {
        console.log('Fetched Members:', response);

        // Filter the response members based on the selected menuid
        const filteredMembers = response.filter(
          (member: any) => member.menuid === this.menuid, // Filter by menuid
        );

        // Now assign the filtered members to the selectedItem
        this.selectedItem.members = filteredMembers;
        console.log(
          'Updated Selected Item with Filtered Members:',
          this.selectedItem,
        );
      },
      (error) => {
        console.error('Error fetching About Members:', error);
      },
    );
  }
}
