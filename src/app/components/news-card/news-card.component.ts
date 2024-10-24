import { Component } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  newsCardsData = [
    {
      title: 'Amazing First Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur…',
      imageURL:
        'https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      newscategoryid: '1',
    },
    {
      title: 'Amazing Second Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit…',
      imageURL:
        'https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      newscategoryid: '1',
    },
    {
      title: 'Amazing Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imageURL:
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: '#',
      newscategoryid: '1',
    },
    {
      title: 'Amazing Forth Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet! orem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imageURL:
        'https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      newscategoryid: '1',
    },
    {
      title: 'Amazing Fifth Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio…',
      imageURL:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      newscategoryid: '1',
    },
    {
      title: 'Amazing 6th Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.',
      imageURL:
        'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      newscategoryid: '1',
    },
  ];
}
