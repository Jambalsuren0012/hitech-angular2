import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { formatDistanceToNow, format } from 'date-fns';
import { mn } from 'date-fns/locale';
import { BooksService } from '../../service/books.service';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewBookComponent implements OnInit {
  bookData: Array<{
    pdf: string;
    picurl: string;
    id: string;
    title: string;
    description: string;
    pdfUrl: string;
    imgUrl: string;
    created_at: string;
  }> = [];

  imageUrl = environment.imgUrl;

  @ViewChild('carousel', { static: false }) carousel: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: { items: 2 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 3 },
      1160: { items: 4 },
      1400: { items: 4 },
    },
  };

  constructor(
    private booksService: BooksService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
  ) {
    this.translate.onLangChange.subscribe(() => this.fetchBooks());
  }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.booksService.getAllBook().subscribe(
      (response) => {
        this.bookData = response.map((book: any) => ({
          id: book.id,
          title: book.title,
          description: book.description,
          pdf: book.pdf,
          picurl: book.picurl,
          created_at: book.created_at,
          imgUrl: `${this.imageUrl}/${book.picurl}`,
        }));

        if (this.carousel) {
        }

        this.cdr.markForCheck(); // Mark changes for OnPush strategy
      },
      (error) => console.error('Error fetching books:', error),
    );
  }

  getTimeAgo(dateString: string): string {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: mn,
    });
  }

  getFormattedDate(dateString: string): string {
    return format(new Date(dateString), 'yyyy-MM-dd');
  }

  openPdf(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }

  trackById(index: number, book: any): string {
    return book.id;
  }
}
