import { Swiper } from 'swiper';

import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-our-tours',
  templateUrl: './our-tours.component.html',
  styleUrl: './our-tours.component.css',
})
export class OurToursComponent {
  toursData = [
    {
      title: 'Mountaineering Tours',
      description: '4+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/75/conversions/dsc_3981-thumb.jpg',
      toursCount: '4+ Tours',
    },
    {
      title: 'Trekking and Hiking Tours',
      description: '3+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/96/conversions/_mg_7348-thumb.jpg',
      toursCount: '3+ Tours',
    },
    {
      title: 'Rock Climbing Trips',
      description: '1+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/95/conversions/20230514_150251-thumb.jpg',
      toursCount: '1+ Tours',
    },
    {
      title: 'Experience Tour',
      description: '8+ Tours',
      imageUrl:
        'https://mongoliatravel.net/storage/94/conversions/dsc_8034-thumb.jpg',
      toursCount: '8+ Tours',
    },
  ];
  @ViewChildren('swiper')
  swiperRefs!: QueryList<ElementRef>;
  swiper!: Swiper;

  goNext(index: number) {
    const swiper = this.swiperRefs.toArray()[index].nativeElement.swiper;
    swiper.slideNext();
  }

  goPrev(index: number) {
    const swiper = this.swiperRefs.toArray()[index].nativeElement.swiper;
    swiper.slidePrev();
  }

  carouselOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  };
}
