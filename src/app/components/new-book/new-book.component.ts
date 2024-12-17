import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
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
    compressedUrl?: string;
    created_at: string;
  }> = []; // Start with an empty array
  imageUrl = environment.imgUrl;

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
    this.translate.onLangChange.subscribe((event) => {
      // console.log('Language changed:', event.lang);
      this.cdr.detectChanges(); // Trigger Angular's change detection
      this.fetchBooks();
    });
  }

  ngOnInit(): void {
    this.fetchBooks(); // Fetch data on component initialization
  }

  fetchBooks(): void {
    this.booksService.getAllBooks(this.translate.currentLang).subscribe(
      (response) => {
        // Assuming the API response is an array of book objects
        this.bookData = response.map((book: any) => ({
          id: book.id,
          title: book.title,
          description: book.description,
          pdf: book.pdf,
          picurl: book.picurl,
          created_at: book.created_at,
          imgUrl: `${this.imageUrl}/${book.picurl}`, // Construct image URL
        }));
        this.compressImages(); // Compress images after fetching data
        // console.log(this.bookData);
      },
      (error) => {
        console.error('Error fetching books:', error);
      },
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

  async compressImages(): Promise<void> {
    const maxWidth = 800;
    const maxHeight = 600;

    for (const image of this.bookData) {
      try {
        const compressedUrl = await this.resizeImage(
          image.imgUrl,
          maxWidth,
          maxHeight,
        );
        image.compressedUrl = compressedUrl;
      } catch (error) {
        console.error(`Error compressing image ${image.imgUrl}:`, error);
        image.compressedUrl = image.imgUrl; // Fallback to original URL
      }
    }
  }

  resizeImage(
    url: string,
    maxWidth: number,
    maxHeight: number,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }

        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedUrl = canvas.toDataURL('image/jpeg', 0.8);
        resolve(compressedUrl);
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
    });
  }

  trackById(index: number, book: any): string {
    return book.id;
  }
}
