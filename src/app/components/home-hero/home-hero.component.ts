import { Component, OnInit } from '@angular/core';
import { SilderService } from '../../service/silder.service'; // Import the service
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'],
})
export class HomeHeroComponent implements OnInit {
  img: Array<{
    picurl: any;
    url: string;
    compressedUrl?: string;
  }> = [];
  imageUrl = environment.imgUrl;

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

  constructor(private sliderService: SilderService) {}

  ngOnInit(): void {
    this.fetchSliderData();
  }
  fetchSliderData() {
    this.sliderService.sliderlist().subscribe({
      next: (data) => {
        console.log('Fetched Slider Data:', data); // Debugging point
        this.img = data; // Assign the data to `img`
      },
      error: (err) => {
        console.error('Error fetching slider data:', err);
      },
    });
  }
}
