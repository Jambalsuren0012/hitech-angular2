import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookdetailsService {
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
      describtion: 'Lorem ipsum dolor sit amet.',
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

  constructor() {}

  // Returns a filtered array of books matching the given id
  getBookDetails(id: string) {
    return this.bookData.filter((book) => book.id === id);
  }
}
