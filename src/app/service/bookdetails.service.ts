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
      describtion:
        'Lorem ipsum dolor sit amet.vLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      created_at: '2024-11-11 12:19:43',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '2',
      imgUrl: '/assets/img/book/1_13.jpeg',
      title: 'Book 1',
      describtion:
        'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      created_at: '2024-11-12 12:19:43',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '3',
      imgUrl: '/assets/img/book/1.jpeg',
      title: 'Book 1',
      created_at: '2024-11-13 12:19:43',
      describtion:
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '4',
      imgUrl: '/assets/img/book/2_1.jpeg',
      title: 'Book 1',
      created_at: '2024-11-14 12:19:43',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '5',
      imgUrl: '/assets/img/book/2_1.jpeg',
      title: 'Book 1',
      created_at: '2024-11-15 12:19:43',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '6',
      imgUrl: '/assets/img/book/2_1.jpeg',
      title: 'Book 1',
      created_at: '2024-11-16 12:19:43',
      describtion: 'Lorem ipsum dolor sit amet.',
      pdfUrl:
        'https://www.free-ebooks.net/humor-classics/The-Adventures-of-Ferdinand-Count-Fathom/pdf?dl&preview',
    },
    {
      id: '7',
      imgUrl: '/assets/img/book/2_1.jpeg',
      title: 'Book 1',
      created_at: '2024-11-17 12:19:43',
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
