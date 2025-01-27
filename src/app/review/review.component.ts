import { Component } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  customerData = [
    {
      name: 'Ethan Mitchel',
      imageUrl: 'https://mongoliatravel.net/storage/107/dsc_0348.jpg',
      description:
        'Thank you very much for your support towards climbing Otgontenger this time.  was really helpful for me, as I dont have any language skills. Being able to communicate in Japanese for everything from email exchanges during the preparation stage to on-site follow-up was really helpful for me, as I dont have any language skills.',
    },
    {
      name: 'Hyuodou Takafumi',
      imageUrl: 'https://mongoliatravel.net/storage/107/dsc_0348.jpg',
      description:
        'Thank you very much for your support towards climbing Otgontenger this time. Being able to communicate in Japanese for everything from email exchanges during the preparation stage to on-site follow-up was really helpful for me, as I dont have any language skills. Being able to communicate in Japanese for everything from email exchanges during the preparation stage to on-site follow-up was really helpful for me, as I dont have any language skills.',
    },

    {
      name: 'Hyodo Naoko',
      imageUrl: 'https://mongoliatravel.net/storage/107/dsc_0348.jpg',
      description:
        'Thank you very much for your support towards climbing Otgontenger this time. Being abl',
    },
    {
      name: 'Nobuhiro Watanabe',
      imageUrl: 'https://mongoliatravel.net/storage/107/dsc_0348.jpg',
      description:
        'Thank you very much for your support towards climbing Otgontenger this time. Being able to communicate in Japanese for everything from email exchanges during the preparation stage to on-site follow-up was really helpful for me, as I dont have any language skills. Being able to communicate in Japanese for everything from email exchanges during the preparation stage to on-site follow-up was really helpful for me, as I dont have any language skills.',
    },

    {
      name: 'Stephen Curry',
      imageUrl: 'https://mongoliatravel.net/storage/107/dsc_0348.jpg',
      description:
        'Thank  stage to on-site follow-up was really helpful for me, as I dont have any language skills. Being able to communicate in Japanese for everything from email exchanges during the preparation stage to on-site follow-up was really helpful for me, as I dont have any language skills.',
    },
  ];
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 3 },
    },
  };
  middleCardIndex: number = 0;

  ngOnInit(): void {
    // Initially set the middle card index to the first card
    this.middleCardIndex = Math.floor(this.customerData.length / 2);
  }

  onTranslated(event: SlidesOutputData): void {
    // Ensure event.slides is defined and activeIndex is found
    const activeIndex = event.slides?.findIndex((slide) => slide.isActive);

    if (activeIndex !== undefined && event.startPosition !== undefined) {
      const visibleSlides = event.slides?.length || 1;
      this.middleCardIndex =
        event.startPosition + Math.floor(visibleSlides / 2);
    }
  }
}
