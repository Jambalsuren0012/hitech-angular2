import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css',
})
export class HomeHeroComponent {
  img = [
    {
      url: '/assets/img/home-slid/1..h.jpg',
    },
    {
      url: '/assets/img/home-slid/DD-40.jpg',
    },
    {
      url: '/assets/img/home-slid/Image0098.jpg',
    },
    {
      url: '/assets/img/home-slid/Антро-2.jpg',
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
        items: 1, // Desktops and larger tablets
      },
      1200: {
        items: 1, // Wider screens or large desktops
      },
      1400: {
        items: 1, // Wider screens or large desktops
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    autoplaySpeed: 2000,
  };
}
