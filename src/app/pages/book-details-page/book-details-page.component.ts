import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { BooksService } from '../../service/books.service';
import { ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import { MenuService } from '../../service/menu.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css'],
})
export class BookDetailsPageComponent implements OnInit {
  bookDetails: any = null;
  imageUrl = environment.imgUrl;
  images: any = null;
  faClock = faClock;
  currentPageUrl: string = encodeURIComponent(window.location.href);

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const bookid = params.get('id'); // Get the `id` from the route
      if (bookid) {
        this.fetchBookDetails(bookid);
      }
    });
  }

  ngAfterViewInit(): void {
    // Do nothing here, it's handled after content loading
  }

  fetchBookDetails(newsid: string): void {
    this.bookService.getAllBook().subscribe(
      (data) => {
        this.bookDetails = data.find((item: any) => item.id === newsid) || null;

        // Wait a bit for the content to be rendered and then apply styles
        setTimeout(() => {
          this.styleInnerImages();
        }, 100); // Trigger the style adjustment immediately after the content is rendered
      },
      (error) => {
        console.error('Error fetching book details:', error);
      },
    );
  }

  styleInnerImages(): void {
    const images = this.el.nativeElement.querySelectorAll('.books-content img');
    images.forEach((img: HTMLElement) => {
      this.renderer.setStyle(img, 'margin-top', '25px');
      this.renderer.setStyle(img, 'display', 'block');
    });
  }

  getFormattedDate(dateString: string): string {
    return format(new Date(dateString), 'yyyy-MM-dd');
  }
}
