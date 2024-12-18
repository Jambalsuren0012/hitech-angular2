import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import { environment } from '../../environments/environment';
import { BooksService } from '../../service/books.service'; // Import BooksService
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css'],
})
export class BookDetailsPageComponent implements OnInit {
  imgurl = environment.imgUrl;
  bookDetails: any = null;
  faClock = faClock;
  currentPageUrl: string = encodeURIComponent(window.location.href);

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService, // Inject BooksService
    private renderer: Renderer2,
    private el: ElementRef, // Inject ElementRef
    private cdr: ChangeDetectorRef, // Inject ChangeDetectorRef
  ) {}

  // Format the date string
  getFormattedDate(dateString: string): string {
    return format(new Date(dateString), 'yyyy-MM-dd');
  }

  styleInnerImages(): void {
    const images = this.el.nativeElement.querySelectorAll('.news-content img');
    images.forEach((img: HTMLElement) => {
      this.renderer.setStyle(img, 'margin-top', '25px');
      this.renderer.setStyle(img, 'display', 'block');
    });
  }

  fetchBookDetails(bookid: string): void {
    // Fetch the specific book by id from the service
    this.bookService.getAllBooks(bookid).subscribe(
      (data) => {
        this.bookDetails = data.find((item: any) => item.id === bookid) || null;

        // After the content is rendered, apply styles to images
        this.cdr.detectChanges(); // Ensure that Angular detects the changes
        setTimeout(() => {
          this.styleInnerImages();
        }, 0);
      },
      (error) => {
        console.error('Error fetching book details:', error);
      },
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const bookid = params.get('id'); // Get the `id` from the route
      if (bookid) {
        this.fetchBookDetails(bookid); // Fetch book details using the `id`
      }
    });
  }
}
