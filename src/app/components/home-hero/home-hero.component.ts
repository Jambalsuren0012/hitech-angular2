import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'],
})
export class HomeHeroComponent implements OnInit {
  img: Array<{ url: string; compressedUrl?: string }> = [
    { url: '/assets/img/home-slid/2.jpg' },
    { url: '/assets/img/home-slid/3.jpg' },
    { url: '/assets/img/home-slid/3.png' },
  ];
  isLoading: boolean = true;

  customOptions = {
    loop: true,
    items: 1,
    center: false, // Set to false to prevent centering that causes side gaps
    stagePadding: 0, // Remove padding to avoid left-right gaps
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 2500,
    animateIn: 'animate__animated animate__fadeIn',
    animateOut: 'animate__animated animate__fadeOut',
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
    },
  };

  ngOnInit(): void {
    this.checkImagesLoaded();
  }

  checkImagesLoaded() {
    // Check if the window object is available (indicating that the code is running in the browser)
    if (typeof window !== 'undefined') {
      let loadedImages = 0;
      this.img.forEach((image) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === this.img.length) {
            this.isLoading = false;
          }
        };
      });
    }
  }
}
