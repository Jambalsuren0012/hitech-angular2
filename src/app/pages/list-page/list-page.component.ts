import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent {
  newsCardsData: Array<{
    id: string; // Change to string (or number if preferred)
    title: string;
    postDate: string;
    description: string;
    link: string; // Change from any to string
    bookcategoryid: string;
    imgUrl: string; // Make sure this has a type (string or another type if needed)
    compressedUrl?: string; // Optional
  }> = [
    {
      id: '1',
      title: 'Amazing First Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '2',
      title: 'Amazing Second Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '3',
      title: 'Amazing Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '4',
      title: 'Amazing Forth Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet! orem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '5',
      title: 'Amazing Fifth Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '6',
      title: 'Amazing 6th Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.',
      imgUrl:
        'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
  ];
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
  items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m6WeuZ4-B7rXmWyimaFdN3UlPrmSrpQBhA&s',
    title: `Card Title ${i + 1}`,
    description: `This is the description for card This is the description for cardThis is the description for cardThis is the description for cardThis is the description for cardThis is the description for cardThis is the description for card ${i + 1}.`,
  }));

  itemsPerPage = 15;
  currentPage = 1;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
