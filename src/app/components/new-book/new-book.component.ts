import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent {
  bookData = [
    {
      imgUrl:
        'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      imgUrl:
        'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      imgUrl:
        'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      imgUrl:
        'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
      title: 'Book 1',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 },
    },
    nav: true,
  };

  openPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank'); // Open PDF in a new tab
  }
}
