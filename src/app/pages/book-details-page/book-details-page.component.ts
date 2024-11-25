import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from '../../service/bookdetails.service';
import { ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css'],
})
export class BookDetailsPageComponent implements OnInit {
  categories = [
    { id: '1', name: 'Fiction' },
    { id: '2', name: 'Non-Fiction' },
    { id: '3', name: 'Science' },
    { id: '4', name: 'History' },
    { id: '5', name: 'Biography' },
    { id: '6', name: 'Children' },
    { id: '7', name: 'Fantasy' },
    { id: '8', name: 'Mystery' },
  ];
  selectedMenu: number | null = null;

  // Method to toggle the visibility of subtitles
  toggleMenu(menuId: number) {
    if (this.selectedMenu === menuId) {
      this.selectedMenu = null; // Hide the subtitles if the same menu is clicked again
    } else {
      this.selectedMenu = menuId; // Show subtitles for the clicked menu
    }
  }

  menuItems: any = [];

  loadmenu() {
    this.menuService.menulist().subscribe({
      next: (data) => {
        this.menuItems = data;
        console.log(this.menuItems);
      },
      error: (err) => console.log(err),
    });
  }
  bookdetailslist: any = null;
  faClock = faClock;
  currentPageUrl: string = encodeURIComponent(window.location.href);
  constructor(
    private bookdetailsService: BookdetailsService,
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) {}
  getFormattedDate(dateString: string): string {
    return format(new Date(dateString), 'yyyy-MM-dd');
  }
  ngOnInit(): void {
    // Get the bookid from route parameters
    this.route.paramMap.subscribe((params) => {
      const bookid = params.get('bookid');
      if (bookid) {
        // Fetch book details by id
        const details = this.bookdetailsService.getBookDetails(bookid);
        this.bookdetailslist = details.length > 0 ? details[0] : null;
      }
      this.loadmenu();
    });
  }
}
