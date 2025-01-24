import { Component, OnInit } from '@angular/core';
import { SilderService } from '../../service/silder.service'; // Import the service
import { environment } from '../../environments/environment';
import { TranslateServiceService } from '../../service/translate-service.service';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'],
})
export class HomeHeroComponent implements OnInit {
  img2 = [
    {
      title: "Nature's Beauty",
      description: 'A serene view of a mountain range during sunset.',
      img: 'https://mongoliatravel.net/storage/114/enkdddhtsetseg-natsagdorj-gy8owkr_jmy-unsplash_optimized_250.jpg',
    },
    {
      title: 'Urban Escape',
      description: 'A bustling city skyline at night.',
      img: 'https://www.toursmongolia.com/uploads/Mongolian_landscape_terelj.jpg',
    },
    {
      title: 'Ocean Waves',
      description: 'Crystal clear blue waves crashing onto the shore.',
      img: 'https://preview.redd.it/beautiful-scenery-taken-in-mongolia-last-v0-uerqm6nkpfib1.jpg?width=3000&format=pjpg&auto=webp&s=4bd40f84779bcba8c14ec1386f7b4baf42b9e117',
    },
    {
      title: 'Forest Trail',
      description: 'A peaceful path through a dense green forest.',
      img: 'https://avis-mongolia.com/__data/assets/image/0015/663/varieties/large.jpg',
    },
  ];

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

  constructor(
    private sliderService: SilderService,
    private language: TranslateServiceService,
  ) {}

  ngOnInit(): void {
    this.fetchSliderData();
  }
  fetchSliderData() {
    this.sliderService.sliderlist().subscribe({
      next: (data) => {
        // console.log('Fetched Slider Data:', data); // Debugging point
        this.img = data; // Assign the data to `img`
      },
      error: (err) => {
        console.error('Error fetching slider data:', err);
      },
    });
  }
}
