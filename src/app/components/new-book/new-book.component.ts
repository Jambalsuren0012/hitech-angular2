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
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'], // Add custom left and right arrows
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 2 },
      940: { items: 3 },
      1160: { items: 4 },
      1200: { items: 4 },
    },
    nav: true, // Enables navigation
  };

  openPdf(pdfUrl: string) {
    window.open(pdfUrl, '_blank'); // Open PDF in a new tab
  }
}
