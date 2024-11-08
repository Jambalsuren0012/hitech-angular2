import { Component } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css',
})
export class NewsPageComponent {
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
}
