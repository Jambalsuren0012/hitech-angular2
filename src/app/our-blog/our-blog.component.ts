import { Component } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrl: './our-blog.component.css',
})
export class OurBlogComponent {
  middleCardIndex: number = 0;
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
      title: 'A record of a journey to Mount Otgon Tengger',
      description: '3+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/125/conversions/_dsc0089-thumb.jpg',
      toursCount: '3+ Tours',
      type: 'Blog',
      posted: 'Admin',
    },
    {
      title: 'Heading for Mount Khuiten [Mt. Khuiten]',
      description: '1+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/120/conversions/dsc_0284-thumb.jpg',
      toursCount: '1+ Tours',
      type: 'Blog',
      posted: 'Admin',
    },
    {
      title: 'Khuiten, the highest peak in Mongolia',
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
  i: any;
  ngOnInit(): void {
    // Initially set the middle card index to the first card
    this.middleCardIndex = Math.floor(this.toursData.length / 2);
  }
  onTranslated(event: SlidesOutputData): void {
    const activeIndex = event.slides?.findIndex((slide) => slide.isActive);

    if (activeIndex !== undefined && event.slides) {
      const visibleSlides = event.slides.length;
      this.middleCardIndex = activeIndex + Math.floor(visibleSlides / 2);
    }
  }
}
