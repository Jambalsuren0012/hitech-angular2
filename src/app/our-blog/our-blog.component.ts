import { Component } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrl: './our-blog.component.css',
})
export class OurBlogComponent {
  toursData = [
    {
      title: 'Heading for Mount Khuiten [Mt. Khuiten]',
      description: '4+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/125/conversions/_dsc0089-thumb.jpg',
      toursCount: '4+ Tours',
      type: 'Blog',
      posted: 'Admin',
    },
    {
      title: 'Trekking and Hiking Tours',
      description: '3+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/125/conversions/_dsc0089-thumb.jpg',
      toursCount: '3+ Tours',
      type: 'Blog',
      posted: 'Admin',
    },
    {
      title: 'Rock Climbing Trips',
      description: '1+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/120/conversions/dsc_0284-thumb.jpg',
      toursCount: '1+ Tours',
      type: 'Blog',
      posted: 'Admin',
    },
    {
      title: 'Experience Tour',
      description: '8+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/124/conversions/_dsc0028-thumb.jpg',
      toursCount: '8+ Tours',
      type: 'Blog',
      posted: 'Admin',
    },
  ];
  carouselOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  };
}
