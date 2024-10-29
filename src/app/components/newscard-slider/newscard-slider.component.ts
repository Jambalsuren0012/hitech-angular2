import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-newscard-slider',
  templateUrl: './newscard-slider.component.html',
  styleUrl: './newscard-slider.component.css',
})
export class NewscardSliderComponent {
  newsCardsData = [
    {
      id: '1',
      title: 'Amazing First Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur…',
      imageURL:
        'https://www.archeo.ru/_next/image?url=https%3A%2F%2Fapi.archeo.ru%2Farcheo_media%2FNews%2Fnovost-vadimu-sergeevichu%2FBochkarev.jpg&w=1200&q=75',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '2',
      title: 'Amazing Second Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit…',
      imageURL:
        'https://www.archeo.ru/_next/image?url=https%3A%2F%2Fapi.archeo.ru%2Farcheo_media%2FNews%2Fnovost-epohi-kurganyi-nah%2Folen.tif&w=1200&q=75',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '3',
      title: 'Amazing Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imageURL:
        'https://www.archeo.ru/_next/image?url=https%3A%2F%2Fapi.archeo.ru%2Farcheo_media%2FNews%2Fnovost-nizhnepaleolitiche%2F%25D0%259A%25D0%25B5%25D1%2580%25D0%25BC%25D0%25B5%25D0%25BA.PNG&w=1200&q=75',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '4',
      title: 'Amazing Forth Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet! orem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imageURL:
        'https://www.archeo.ru/_next/image?url=https%3A%2F%2Fapi.archeo.ru%2Farcheo_media%2FNews%2Fnovost-mesta-krusheniya-l%2F1.jpg&w=1200&q=75',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '5',
      title: 'Amazing Fifth Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio…',
      imageURL:
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
      imageURL:
        'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1, // For mobile devices
      },
      400: {
        items: 1, // Slightly larger mobile devices
      },
      600: {
        items: 1, // Tablets or small devices
      },
      900: {
        items: 2, // Desktops and larger tablets
      },
      1200: {
        items: 3, // Wider screens or large desktops
      },
      1400: {
        items: 4, // Wider screens or large desktops
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
  };
}
