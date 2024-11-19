import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewBookComponent {
  trackById(index: number, book: any): string {
    return book.id; // or return book.id as a unique identifier
  }
  bookData: Array<{
    id: string;
    title: string;
    describtion: string;
    pdfUrl: string;
    imgUrl: string;
    compressedUrl?: string;
  }> = [
    {
      id: '1',
      imgUrl: '/assets/img/book/1_2.jpeg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '2',
      imgUrl: '/assets/img/book/1_13.jpeg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '3',
      imgUrl: '/assets/img/book/1.jpeg',
      title: 'Book 1',
      describtion:
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '4',
      imgUrl: '/assets/img/book/2_1.jpeg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
  ];

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
      740: { items: 4 },
      940: { items: 4 },
      1160: { items: 6 }, // Ensure this is effective
    },
  };

  openPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank'); // Open PDF in a new tab
  }
  ngOnInit(): void {
    this.compressImages();
  }

  async compressImages() {
    const maxWidth = 800; // Define your max width
    const maxHeight = 600; // Define your max height

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
        // Optionally, you can set a fallback or keep the original URL
        image.compressedUrl = image.imgUrl; // Keep original in case of error
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
        const compressedUrl = canvas.toDataURL('image/jpeg', 0.8); // JPEG with 80% quality
        resolve(compressedUrl);
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
    });
  }
}
